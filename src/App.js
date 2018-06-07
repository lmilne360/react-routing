import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import Route from "react-router-dom/Route";
import { User } from "./components/User";

const User2 = ({ match }) => {
  return <div>Welcome {match.params.username}</div>;
};
class App extends Component {
  state = {
    loggedIn: false
  };

  loginHandle = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            {" "}
            <li>
              <NavLink exact to="/" activeStyle={{ color: "green" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{ color: "green" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/john" activeStyle={{ color: "green" }}>
                User John
              </NavLink>
            </li>
            <li>
              <NavLink to="/user2/toby" activeStyle={{ color: "green" }}>
                User Toby
              </NavLink>
            </li>
          </ul>
          <Prompt
            when={!this.state.loggedIn}
            message={(location)=>{
              return location.pathname.startsWith('/user') ? 'Are you sure' : true
            }}
          />
          <input
            type="button"
            value={this.state.loggedIn ? "Log Out" : "Log In"}
            onClick={this.loginHandle}
          />

          <Route path="/" exact render={() => <h1> Welcome Home</h1>} />
          <Route path="/about" exact render={() => <h1> About</h1>} />
          <Route
            path="/user/:username"
            exact
            render={({ match }) =>
              this.state.loggedIn ? (
                <User username={match.params.username} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route path="/user2/:username" exact component={User2} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";

export class User extends React.Component {

    render() {
        return (
            <div>
                <h3>The User Page</h3>
                <p>Welcom {this.props.username}</p>
            </div>
        )
    }
}
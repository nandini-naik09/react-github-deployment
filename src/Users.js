import React from "react";

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1>Users Component : Class Component</h1>

        <p>
          Name:{this.props.name} | age: {this.props.age} | City: {this.props.children}</p>
      </div>
    );
  }
}

export default Users;

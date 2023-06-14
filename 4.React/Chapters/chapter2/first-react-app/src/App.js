import React, { Component } from "react";
import Products from "./Products";

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render() {
    const user = {
      firstName: "Bianca",
      lastName: "Dreyer",
    };
    return (
      <div>
        <h1>My First React App!</h1>
        <h1>Hello, {this.formatName(user)}</h1>
        <Products />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import Products from "./Products";
import { Button } from "react-bootstrap";
import Rating from "./Rating";

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render() {
    // const user = {
    //   firstName: "Bianca",
    //   lastName: "Dreyer",
    // };
    const isValid = true;
    return (
      <div>
        {/* <h1>My First React App!</h1> */}
        {/* <h1>Hello, {this.formatName(user)}</h1> */}
        <Products />
        <Button>This is a button so click it!</Button>
        <Button variant="danger">Click here in Emergencies!</Button>
        <Button variant="primary" disabled> This button is disabled so don't bother.. </Button>
        <Button variant="primary" disabled={!isValid}>Default</Button>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    );
  }
}
export default App;

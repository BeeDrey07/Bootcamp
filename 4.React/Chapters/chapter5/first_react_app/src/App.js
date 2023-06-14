import React, { Component } from "react";
import Products from "./Products";
import JumboTronComponent from "./JumboTronComponent";

class App extends Component {
  render() {
    const isValid = true;
    return (
      <div>
        <Products/>
        <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <p>This is really working</p>
        <Person />
      </div>
    );

    //internally html is converted into js by compiler(below is js code). But we dont use this bcuz it is comlex
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, `I' am react app!`)
    // );
  }
}

export default App;

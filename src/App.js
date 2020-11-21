import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";

class App extends Component {
  /*state would be a special property,thus far we don't use it in a special way though, we can change this. State can be changed and if it changes
and that's the special thing about it and it only works on that state property, if it changes, it will lead React to re-render our DOM or to update the DOM I should say.
*/

  state = {
    persons: [{ name: "Anmol" }, { name: "Aarav" }],
  };

  switchNameHandler = () => {
    console.log("Was clicked");
  };
  render() {
    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name}>My hobby is painting</Person>
      </div>
    );

    //internally html is converted into js by compiler(below is js code). But we dont use this bcuz it is complex
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, `I' am react app!`)
    // );
  }
}

export default App;

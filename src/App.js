import React, { Component /*useState*/ } from "react";
import "./App.css";
import Person from "./Person/Person";

// class App extends Component {
//   /*state would be a special property,thus far we don't use it in a special way though, we can change this. State can be changed and if it changes
// and that's the special thing about it and it only works on that state property, if it changes, it will lead React to re-render our DOM or to update the DOM I should say.
// */

//   state = {
//     persons: [{ name: "Anmol" }, { name: "Aarav" }, { name: "Andrew" }],
//     otherState: "Some value", // this value will not be updated
//   };

//   switchNameHandler = (newName) => {
//     //console.log("Was clicked");
//     //Dont do this : this.state.persons[0].name = "Anmol";

//     this.setState({
//       //this is used to change the state
//       persons: [
//         { name: newName },
//         { name: "Aarav Anand" },
//         { name: "Andrew james" },
//       ],
//     });
//   };

//   nameChangedHandler = (event) => {
//     this.setState({
//       persons: [
//         { name: "Anmol" },
//         { name: event.target.value }, //target here is the input element
//         { name: "Andrew" },
//       ],
//     });
//   };

//   render() {
//     //Inline style
//     const style = {
//       backgroundColor: "white",
//       font: "inherit",
//       border: "1px solid blue",
//       padding: "8px",
//       cursor: "pointer",
//     };

//     return (
//       <div className="App">
//         <h1>Hi i am react app</h1>
//         <p>This is really working</p>
//         <button
//           style={style}
//           onClick={() => this.switchNameHandler("Anmol Zakie")}
//         >
//           Switch name
//         </button>
//         <Person name={this.state.persons[0].name} />
//         <Person
//           name={this.state.persons[1].name}
//           onChange={this.nameChangedHandler}
//         >
//           My hobby is painting
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           click={this.switchNameHandler.bind(this, "Anmol King")}
//         />
//       </div>
//     );

//internally html is converted into js by compiler(below is js code). But we dont use this bcuz it is complex
// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, `I' am react app!`)
// );
//   }
// }

// export default App;

/************************ Using React Hooks to update states in functional component *********************************/

// const app = (props) => {
//useState is use for changing the state in functional component
//   const [personsState, setpersonsState] = useState({
//     persons: [{ name: "Anmol" }, { name: "Aarav" }],
//     otherState: "Some value", // this value will not be updated
//   });

//   const [otherState, setOtherState] = useState("some other value"); // instead passing manually we can also do it like this

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     setpersonsState({
//this is used to change the state
//       persons: [{ name: "Anmol Zakie" }, { name: "Aarav" }],
//otherState: personsState.otherState, //We need to pass it manually because useState replaces oldvalue with new value so if we dont pass it it will be removed
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi i am react app</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch name</button>
//       <Person name={personsState.persons[0].name} />
//       <Person name={personsState.persons[1].name}>My hobby is painting</Person>
//     </div>
//   );
// };

// export default app;

/************************     Section 4     ****************************************/

class App extends Component {
  state = {
    persons: [
      { id: "adcd", name: "Anmol" },
      { id: "dsdvs", name: "Aarav" },
      { id: "dddjx", name: "Andrew" },
    ],
    otherState: "Some value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    //Find that person from the persons array
    const personIndex = this.state.persons.findIndex((el) => {
      return el.id === id;
    });
    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };

    //Or we can aslo use - const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  tooglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = (personIndex) => {
    //Always create a copy of the original array and then mutate the copied array by using slice() or spread operator
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //create new version of the aaray
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    //Instead of rendering content conditionally by ternary operator we can use js
    let persons = null;

    //Rendering the list dynamically
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            //This maps the persons array and returns each and every value and then renders it
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                key={person.id}
                onChange={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <p>This is really working</p>
        <button style={style} onClick={this.tooglePersonHandler}>
          Toogle name
        </button>
        {persons}

        {/* Instead of this use Javascript way of rendering content conditionally
          {this.state.showPersons === true ? (
          <div>
            <Person name={this.state.persons[0].name} />
            <Person
              name={this.state.persons[1].name}
              onChange={this.nameChangedHandler}
            >
              My hobby is painting
            </Person>
            <Person
              name={this.state.persons[2].name}
              click={this.switchNameHandler.bind(this, "Anmol King")}
            />
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default App;

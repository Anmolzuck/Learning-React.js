import React, { Component /*useState*/ } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adcd', name: 'Anmol' },
      { id: 'dsdvs', name: 'Aarav' },
      { id: 'dddjx', name: 'Andrew' },
    ],
    otherState: 'Some value',
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      //   ':hover': {
      //     backgroundColor: 'lightgreen',
      //     color: 'black',
      //   },
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

      //Applying dynamic styling
      style.backgroundColor = 'red';
      //   style[':hover'] = {
      //     backgroundColor: 'salmon',
      //     color: 'black',
      //   };
    }

    //Changing class dynamically
    // let classes = ["red", "bold"].join(" ");  This will give "red bold" which is used in css

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');

    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.tooglePersonHandler}>
          Toogle name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

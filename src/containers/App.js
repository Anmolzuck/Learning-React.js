import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('1-[App.js] constructor');
    //Can also define intial state here but this not old way
  }

  state = {
    persons: [
      { id: 'adcd', name: 'Anmol' },
      { id: 'dsdvs', name: 'Aarav' },
      { id: 'dddjx', name: 'Andrew' },
    ],
    otherState: 'Some value',
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    //Used to return updated state
    console.log('2-[App.js] getDerivedState ', props);
    return state;
  }

  componentDidMount() {
    //For making http requests
    console.log('5-[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((el) => {
      return el.id === id;
    });
    //console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };
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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    console.log('3-[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.tooglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

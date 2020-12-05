import React, { Component /*useState*/ } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

//We can pass dynamic content in the styled component normally using ${}
const StyledButton = styled.button`
background-color: ${(props) => (props.alt ? 'red' : 'green')};
color:white;
font: inherit;
border:1px solid blue;
padding: 8px;
cursor: pointer;

  &:hover {
    background-color:  ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
    color:black;
  },
`;

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
    const personIndex = this.state.persons.findIndex((el) => {
      return el.id === id;
    });
    console.log(personIndex);

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
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
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

    const classes = [];
    if (this.state.persons.length <= 2) classes.push('red');
    if (this.state.persons.length <= 1) classes.push('bold');

    return (
      <div className="App">
        <h1>Hi i am react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.tooglePersonHandler}
        >
          Toogle name
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;

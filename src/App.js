import React, { Component /*useState*/ } from 'react';
import classes from './App.css';
//import styled from 'styled-components';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

//We can pass dynamic content in the styled component normally using ${}
// const StyledButton = styled.button`
// background-color: ${(props) => (props.alt ? 'red' : 'green')};
// color:white;
// font: inherit;
// border:1px solid blue;
// padding: 8px;
// cursor: pointer;

//   &:hover {
//     background-color:  ${(props) => (props.alt ? 'salmon' : 'lightgreen')};
//     color:black;
//   },
// `;

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
    // let btnClasses = [classes.button];
    let btnClasses = '';
    console.log(btnClasses);

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  onChange={(event) =>
                    this.nameChangedHandler(event, person.id)
                  }
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      // btnClasses.push(classes.Red);
      btnClasses = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>Hi i am react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>

        {/* <StyledButton
          alt={this.state.showPersons}
          onClick={this.tooglePersonHandler}
        >
          Toogle name
        </StyledButton> */}

        {/*<button
          className={btnClasses.join(' ')}
          onClick={this.tooglePersonHandler}
        >
          Toogle Name
        </button> */}

        <button className={btnClasses} onClick={this.tooglePersonHandler}>
          Toogle Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

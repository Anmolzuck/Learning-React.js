// import React from 'react';
// import Person from './Person/Person';

// //We get the persons array from App.js
// const persons = (props) => {
//   console.log('4-[Persons.js] rendering..');
//   return props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         key={person.id}
//         onChange={(event) => props.changed(event, person.id)}
//       />
//     );
//   });
// };

// export default persons;

import React, { Component } from 'react';
import Person from './Person/Person';

export class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps);
    //We have to pass condition which return true or false
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapShotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  //We write all the code whuch we want to execute before the component is removed
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('4-[Persons.js] rendering..');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          key={person.id}
          onChange={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;

import React from 'react';
import Person from './Person/Person';

//We get the persons array from App.js
const persons = (props) => {
  console.log('4-[Persons.js] rendering..');
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        key={person.id}
        onChange={(event) => props.changed(event, person.id)}
      />
    );
  });
};

export default persons;

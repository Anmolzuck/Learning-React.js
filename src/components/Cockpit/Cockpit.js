import React from 'react';
import classes from './Cockpit.css';

function Cockpit(props) {
  let btnClasses = '';

  if (props.showPersons) btnClasses = classes.Red;

  const assignedClasses = [];
  if (props.persons.length <= 2) assignedClasses.push(classes.red);
  if (props.persons.length <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>

      <button className={btnClasses} onClick={props.clicked}>
        Toogle Name
      </button>
    </div>
  );
}

export default Cockpit;

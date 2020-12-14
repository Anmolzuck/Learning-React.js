import React, { useEffect } from 'react';
import classes from './Cockpit.css';

function Cockpit(props) {
  //This will only execute when the data is changed
  useEffect(() => {
    console.log('Cockpit.js 1st useEffect');
    setTimeout(() => {
      alert('Data is fetched');
    }, 1000);

    return () => {
      // clearTimeout(timer);
      console.log('Cockpit.js cleanup work  in 1st useEffect');
    };
    //Make https request here
  }, []); //if we pass empty array then useEffect will only run at the beginning or creation time

  //This will be executed for every render lifecycle
  useEffect(() => {
    console.log('Cockpit.js 2nd useEffect');
    return () => console.log('Cockpit.js 2nd cleanup work in useEffect');
  });

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

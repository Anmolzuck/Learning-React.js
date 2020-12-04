import React from 'react';
import Radium from 'radium';
import './Person.css';

//Creating a component
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and i am {Math.floor(Math.random() * 30)} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChange} value={props.name} />
    </div>
  );
};

export default Radium(person);

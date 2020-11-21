import React from "react";

//Creating a component
const person = (props) => {
  return (
    <div>
      <p>
        I am {props.name} and i am {Math.floor(Math.random() * 30)} years old!{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

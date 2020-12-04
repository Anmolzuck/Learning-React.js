import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium';
// import './Person.css';

//StyledDiv is a react component
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    // <div className="Person" style={styles}>
    <StyledDiv>
      <p onClick={props.click}>
        I am {props.name} and i am {Math.floor(Math.random() * 30)} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChange} value={props.name} />
    </StyledDiv>
  );
};

export default person;

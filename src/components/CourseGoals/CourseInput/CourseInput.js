import React, { useState } from "react";
import styled from 'styled-components' 
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); //states can be indicator for validation of value

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length === 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    } 
    else props.onAddGoal(enteredValue);
  };


  const FormControl = styled.div `
  
   margin: 0.5rem 0;
  
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  
  &.invalid input{
    border-color: red;
    background: rgb(245, 171, 202);
  }
  
  &.invalid label{
    color: red;
  }
  
  
  `

  return (
    <form onSubmit={formSubmitHandler}>
      {/* dynamic css for chancing state of valid */}
      <div className={`form-control ${isValid ?  '' : 'invalid' }`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

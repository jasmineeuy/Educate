import React from "react";

function inputField(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.inputName}</label>
      <input
        name={props.id}
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        
      />
    </>
  );
}

export default inputField;

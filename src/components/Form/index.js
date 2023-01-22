import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div className="form">
      <div>
        <label>{props.label}</label>
        <input placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default Form;

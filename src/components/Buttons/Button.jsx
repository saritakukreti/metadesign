import React from "react";

const Button = (props) => {
  return <button className={props.classUsed}>{props.text}</button>;
};

export default Button;

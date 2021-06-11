import React from "react";

export const Inputs = (props) => {
  return (
    <input
      className={props.class}
      type={props.type}
      pattern=".{8,12}"
      required
      title="8 to 12 characters"
      onChange={(e) => {
        props.handler(e.target.value, props.check ? true : false);
      }}
      placeholder={props.placeholder}
    />
  );
};

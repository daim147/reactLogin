import React from "react";
import { Inputs } from "./inputs";
export const Form = (props) => {
  return (
    <form className="form">
      <Inputs
        type="text"
        handler={props.handler}
        placeholder="Username"
        class="name"
      />
      <Inputs
        type="password"
        placeholder="Password"
        handler={props.password}
        class="pass"
        check={false}
      />
      {!props.data.isRegistered && (
        <Inputs
          type="password"
          placeholder="Password"
          handler={props.password}
          check={true}
        />
      )}
      <button
        onClick={(e) => {
          e.preventDefault();
          props.logged(!props.data.condition);
        }}
        type="submit"
      >
        {props.data.type[+props.data.condition]}
      </button>
    </form>
  );
};

import React from "react";

export const Greeting = ({ hour }) => {
  if (hour >= 20) {
    return <h1>Have a Dreamful Night</h1>;
  } else if (hour >= 8) {
    return <h1>Have a Good Day</h1>;
  }
};

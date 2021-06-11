import React from "react";

export const Greeting = ({ hour }) => {
  if (hour >= 20 || hour < 8 || hour >= 0) {
    return <h1>Sweet Dream</h1>;
  } else if (hour >= 8) {
    return <h1>Have a Good Day</h1>;
  }
};

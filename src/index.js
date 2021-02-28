import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {num + 2}</p>
  </div>,
  document.getElementById("root")
);

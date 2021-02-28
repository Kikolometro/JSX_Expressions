import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const num = 7;
const currentDate = new Date();

const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {num + 2}</p>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

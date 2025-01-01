import React from "react";
import ReactDOM from "react-dom";

var number = Math.floor(Math.random() * 20);
const fName = "João";
const lName = "Victor";

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>Your lucky number is: {number} </p>
  </div>,
  document.getElementById("root")
);

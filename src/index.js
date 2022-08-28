import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
let hour = d.getHours();
console.log(hour);

let greeting;

const customStyle = {
  color: ""
};

if (hour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (hour < 18) {
  greeting = "Goo afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {" "}
    {greeting}{" "}
  </h1>,

  document.getElementById("root")
);

'use strict';

const answer = 42;
console.log(`main says: ${answer}^2 = ${(x => x * x)(answer)}`);


import React from "react";
import ReactDOM from "react-dom";
import AppController from "./components/AppController";

ReactDOM.render(<AppController />, document.getElementById("react"));

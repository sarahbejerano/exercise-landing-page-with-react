//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import Home from "./home.jsx";

ReactDOM.render(<Home />, document.querySelector("#app"));

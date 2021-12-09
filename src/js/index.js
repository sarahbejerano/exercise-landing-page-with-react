//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
import Layout from "./layout.jsx";

ReactDOM.render(<Layout />, document.querySelector("#app"));

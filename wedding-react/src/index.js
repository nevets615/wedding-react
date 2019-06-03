import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById("root")
);

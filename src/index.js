import React from "react"
import { render } from "react-dom"
import App from "./app"
import { HashRouter as Router, Route } from "react-router-dom"

render(
  <Router>
    <Route component={App}  ></Route>
  </Router>,
  document.querySelector("#root")
)

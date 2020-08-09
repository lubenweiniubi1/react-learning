import React, { Component } from "react"
import { render } from "react-dom"
import App from "./app"
import store from "./store"
window.store = store //用来调试的
render(<App store={store} />, document.querySelector("#root"))

import React, { Component } from "react"
import { Counter, CounterBtn } from "./components"

export default class App extends Component {
  render() {
    return (
      <>
        <CounterBtn type="add">+</CounterBtn>
        <Counter></Counter>
        <CounterBtn type="del">-</CounterBtn>
      </>
    )
  }
}

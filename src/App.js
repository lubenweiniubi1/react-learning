import React, { Component, Fragment } from "react"
import { TodoInput, TodoHeader, TodoList } from "./components"

export default class App extends Component {
  render() {
    //每个renturn 必须只有一个根元素，这里生成额外的dom
    //如果实在不想要，就使用空标签,有两种用法
    if (0) {
      return (
        <Fragment>
          <TodoHeader></TodoHeader>
          <TodoInput />
          <TodoList></TodoList>
        </Fragment>
      )
    }

    if (1) {
      return (
        <>
          <TodoHeader></TodoHeader>
          <TodoInput />
          <TodoList></TodoList>
        </>
      )
    }
  }
}

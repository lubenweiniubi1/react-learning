import React, { Component, Fragment } from "react"
import { TodoInput, TodoHeader, TodoList } from "./components"

export default class App extends Component {
  // state = {
  //   title:"待办事项列表"
  // }
  constructor() {
    super()
    this.state = {
      title: "待办事项列表",
      desc: "今日b事儿，今日毕",
      todos: [
        {
          id: 1,
          title: "吃饭",
          isCompleted: true,
        },
        {
          id: 2,
          title: "睡觉",
          isCompleted: false,
        },
      ],
    }
  }
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
          <TodoHeader desc={this.state.desc}>
            <i>
              {this.state.title} {/*这里会多一传一个children属性*/}
            </i>
          </TodoHeader>
          <TodoInput btnDetail="ADD" />
          <TodoList todos={this.state.todos}></TodoList>
        </>
      )
    }
  }
}

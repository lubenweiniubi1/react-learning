import React, { Component } from "react"
import TodoItem from "./TodoItem"
export default class TodoList extends Component {
  render() {

    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            // <TodoItem
            //   key={todo.id}
            //   id={todo.id}
            //   title={todo.title}
            //   isCompleted={todo.isCompleted}
            // />
            <TodoItem
              key={todo.id}
              {...todo} //展开，这样上层如果添加了一个属性，这里就不用一个一个改了
            />
          )
        })}
      </ul>
    )
  }
}

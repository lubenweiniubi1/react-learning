import React, { Component } from "react"
import TodoItem from "./TodoItem"
import PropTypes, { number } from "prop-types"

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
      })
    ).isRequired,
    onCompletedChange: PropTypes.func,
  }

  render() {
    // console.log(this.props.todos)//3 ？？？
  
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              onCompletedChange={this.props.onCompletedChange} //展开，这样上层如果添加了一个属性，这里就不用一个一个改了
              {...todo}
            />
          )
        })}
      </ul>
    )
  }
}

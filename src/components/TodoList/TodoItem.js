import React, { Component } from "react"
const noop = () => {}
export default class TodoItem extends Component {
  handleChange = () => {
    // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
    const { onCompletedChange = noop, id } = this.props //默认值搞成空函数，保证代码运行不报错
    onCompletedChange && onCompletedChange(this.props.id)
  }

  render() {
    const { isCompleted, title } = this.props
    return (
      <li>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleChange}
        />
        <span>
          {" "}
          {title} {isCompleted ? "已完成" : "未完成"}
        </span>
      </li>
    )
  }
}

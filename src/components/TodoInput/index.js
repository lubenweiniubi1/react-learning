import React, { Component } from "react"
import PropTypes from "prop-types"

export default class TodoInput extends Component {
  constructor() {
    //只会执行一次
    super()
    this.state = {
      inputValue: "",
    }
    this.handleInput2 = this.handleInput2.bind(this) //
  }
  //类组件可以这样写
  static propTypes = {
    btnDetail: PropTypes.string,
  }

  //添加默认值，a ||a 这种硬编码就别写了
  static defaultProps = {
    btnDetail: "添加TODO",
  }

  handleAddClicked = (d) => {
    this.props.addTodo(this.state.inputValue)
  }

  handleInputChange = (e) => {
    console.log(e.currentTarget.value)
    this.setState({
      inputValue: e.currentTarget.value,
    })
  }

  handleInput2(id) {
    // console.log(this) //undefined ，需要绑定
    console.log(id) //1234
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          type="text"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddClicked}>{this.props.btnDetail}</button>
      </div>
    )
  }
}

// react 里面通过ref来获取组件或者dom元素，要使用ref之前必须先调用React.createRef 方法来创建一个ref
import React, { Component, createRef } from "react"
import PropTypes from "prop-types"

export default class TodoInput extends Component {
  constructor() {
    //只会执行一次
    super()
    this.state = {
      inputValue: "",
    }
    this.handleInput2 = this.handleInput2.bind(this) //

    //在这里创建ref
    this.inputDom = createRef()
  }
  //类组件可以这样写
  static propTypes = {
    btnDetail: PropTypes.string,
  }

  //添加默认值，a ||a 这种硬编码就别写了
  static defaultProps = {
    btnDetail: "添加TODO",
  }

  handleAddClicked = (e) => {
    console.log(this.inputDom)

    if (this.state.inputValue === "") {
      return
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: "",
    })
    this.inputDom.current.focus()
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleAddClicked()
    }
  }

  handleInputChange = (e) => {
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
          ref={this.inputDom}
          value={this.state.inputValue}
          type="text"
          onChange={this.handleInputChange}
          onKeyUp={this.handleKeyUp}
        />
        <button onClick={this.handleAddClicked}>{this.props.btnDetail}</button>
      </div>
    )
  }
}

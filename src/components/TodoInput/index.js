import React, { Component } from "react"
import PropTypes from "prop-types"

export default class TodoInput extends Component {
  //类组件可以这样写
  static propTypes = {
    btnDetail: PropTypes.string,
  }

  //添加默认值，a ||a 这种硬编码就别写了
  static defaultProps = {
    btnDetail: "添加TODO",
  }

  render() {

    return (
      <div>
        <input type="text" />
        <button>{this.props.btnDetail}</button>
      </div>
    )
  }
}

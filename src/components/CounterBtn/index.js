import React, { Component } from "react"
import {ConterConsumer} from '../../counterStore'

//createContext（）的结果是一个对象
// console.log(createContext())//Consumer , Provider
export default class CountBtn extends Component {
  render() {
    return (
      //注意Consumer的children必须是一个方法
      //这个方法有一个参数，就是Provider的value
      <ConterConsumer>
        {({ onAdd, onDel }) => {
          return (
            <button onClick={this.props.type === "add" ? onAdd : onDel}>
              {this.props.children}
            </button>
          )
        }}
      </ConterConsumer>
    )
  }
}

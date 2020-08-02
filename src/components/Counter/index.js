import React, { Component } from "react"
import {ConterConsumer} from '../../counterStore'

export default class Counter extends Component {
  render() {
    return (
      <ConterConsumer>
        {({ count }) => {
          console.log(count) //count:100
          return <span>{count}</span>
        }}
      </ConterConsumer>
    )
  }
}

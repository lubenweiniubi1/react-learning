import React, { Component } from "react"
import withCopyright from "./withCopy"

@withCopyright
//@
class Another extends Component {
  render() {
    return <div>Another {this.props.name}</div>
  }
}

export default Another
//等同于 withCopyright(Another)
import React, { Component } from "react"
import withCopyright from "./withCopy"
import Another from "./Another"

class App extends Component {
  render() {
    return (
      <div>
        App
        <Another name={'another component'}/>
      </div>
    )
  }
}
//高阶组件可以劫持我们的组件渲染
export default App

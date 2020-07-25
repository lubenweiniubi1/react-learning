import React, { Component } from "react"
import { render } from "react-dom"
import "./index.css"
import classNames from "classnames"
import styled from "styled-components"

if (1) {
  const Title = styled.h1`
    color: #f00;
  `

  class App extends Component {
    render() {
      const style = { color: "red" }
      console.log(classNames("foo", { jar: true }))

      return (
        <div>
          <h1>元素中的样式 </h1>
          <ol>
            <li style={style}> 使用style内联创建</li>
            <li className="has-text-red"> 使用className创建</li>
            <li className={classNames("a", { b: false }, { c: true })}>
              要动态添加不同的className 就可以使用第三方的包
            </li>
            <li>
              <Title>styled-components的使用</Title>
            </li>
          </ol>
        </div>
      )
    }
  }
  render(<App />, document.querySelector("#root"))
}

import React, { Component } from "react"
import { Button, Pagination, ConfigProvider } from "antd"
import "./app.less"
export default class App extends Component {
  state = {
    isLogin: false,
  }

  render() {
    return (
        <Pagination defaultCurrent={6} total={500} />
    )
  } 
}

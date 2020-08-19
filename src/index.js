import React from "react"
import { render } from "react-dom"
import App from "./App"
import { ConfigProvider } from "antd"
import zhCN from "antd/es/locale/zh_CN"

render(
  <ConfigProvider locale={zhCN}>
    <App></App>
  </ConfigProvider>,
  document.querySelector("#root")
)

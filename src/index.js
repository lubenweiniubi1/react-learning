import React from "react"
import { render } from "react-dom"
import App from "./App"
import * as services from "./services"

//如果全局扩展React.Component的一些prototype,比如想把ajax方法全局挂载到组件的this上，就可以使用这种方式：

//引入所有的ajax请求import * as services from "./services"
//在prototype上挂载http=这个东西，然后 this.http.方法名 访问
// React.Component.prototype.http = services

render(<App />, document.querySelector("#root"))

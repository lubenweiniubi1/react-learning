import React, { Component } from "react"
import { render } from "react-dom"
import App from "./app"
import store from "./store"
//redux提供的一个组件
import { Provider } from "react-redux"

window.store = store //用来调试的
render(

  //一般把这个组件放在应用程序的最顶层，这个组件必须有一个store属性，这个store属性的值 就是咱们创建的哪个store
  //只要在最外层包裹了这个Provider，那么所有后代组件都可以使用Redux.connect做连接
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector("#root")
)

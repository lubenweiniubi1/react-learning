import React, { Component } from "react"
import { render } from "react-dom"

//定义组件的第二种方式,使用类,继承React下的Component
class App extends Component {
  //render(): ReactNode; 返回的这个
  render() {
    console.log(this) //这个组件实例
    return (
      <div>
        <h1>类1组件</h1>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

if (0) {
  //这里是react-dom 提供的一个方法,这个方法只调用一次
  render(
    <App title="类组件是继承React.Component" x="1bc" />,
    document.querySelector("#root")
  )
}

//实际上面的代码运行机制为下面这个
if (1) {
  const app = new App({
    title: "类组件是继承React.Component",
  }).render() //直接渲染会报错,因为参数为element
  //render(): ReactNode; 返回的这个

  //这里是react-dom 提供的一个方法,这个方法只调用一次
  render(app, document.querySelector("#root"))
}

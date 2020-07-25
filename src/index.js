import React, { Component } from "react"
import { render } from "react-dom"

//这是 jsx的语法,但是 不是 合法的js代码
if (0) {
  class App extends Component {
    //render(): ReactNode; 返回的这个
    render() {
      console.log(this) //这个组件实例
      return (
        <div className="con" id="appRoot">
          <h1 className="title">JSX原理</h1>
          <p>类组件是继承React.Component</p>
        </div>
      )
    }
  }
}

//  表示一个虚拟Dom树的方式,用一个js方式构建 上面的 jsx,会根据这个来重新渲染
// const appVDom = {
//   tag: "div",
//   attrs: {
//     className: "con",
//     id: "appRoot",
//   },
//   children: [
//     {
//       tag: "h1",
//       attrs: {
//         className: "title",
//       },
//       children: ["JSX原理"],
//     },
//     {
//       tag: "p",
//       attrs: null,
//       children: ["类组件是继承React.Component"],
//     },
//   ],
// }

//所以react在真正的渲染的时候会把上面的代码编译为下面的样子来运行
//实际上编译执行的时候会被编译成这种:合法的JavaScript
if (1) {
  class App extends Component {
    //render(): ReactNode; 返回的这个
    render() {
      console.log(this) //这个组件实例

      //React.createElement 是一个方法用来创建元素,可以有很多的参数,但是前两个是固定的
      //第一个是标签名,第二个是标签的属性,剩下的是子元素.....
      //React.createElement(type,[props],[...children])
      return React.createElement(
        "div",
        {
          className: "con",
          id: "appRoot",
        },
        React.createElement(
          "h1",
          {
            className: "title",
          },
          "JSX原理"
        ),
        React.createElement("p", null, "类组件是继承React.Component")
      )
    }
  }
  render(<App />, document.querySelector("#root"))
}

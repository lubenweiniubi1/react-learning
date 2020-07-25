import React from "react"
import ReactDOM from "react-dom"

if (0) {
  //这种方式可以理解为创建了一个简单的react元素
  // const app = <h1>Welcome to Re11act!</h1>

  //{}语法你懂的,通过箭头函数创建组件
  const createApp = (props) => {
    return (
      <div>
        {/* 只要在jsx里面要插入js代码,就加一层花括号即可,注释也是js,所以这里的注释就加了一层花括号*/}
        <h1>Welcome to {props.title}</h1>
      </div>
    )
  }
  const app = createApp({
    title: "React 16.8",
  })

  ReactDOM.render(app, document.querySelector("#root")) //把结果渲染到render里面去
}

if (1) {
  //采用标签的形式渲染,通过箭头函数创建组件,但是名字必须大写字母开始,原因在这 https://zh-hans.reactjs.org/docs/components-and-props.html
  const App = (props) => {
    return (
      <div>
        {/* 只要在jsx里面要插入js代码,就加一层花括号即可,注释也是js,所以这里的注释就加了一层花括号*/}
        <h1>Welcome to {props.title}</h1>
      </div>
    )
  }

  ReactDOM.render(<App title={"五五开"} />, document.querySelector("#root")) //这里的原理就在上面,真正调用的就是上面那部分代码,因为App本来只是个函数,需要把结果渲染到render里面去
}

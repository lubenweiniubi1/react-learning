# React	

### React是什么？

> https://reactjs.org/

***用来构建用户界面的JavaScript库***

***React 16以前的算法是`diff` 后面换成了`fiber`***

渲染变成异步的了等等，以后有机会看。

特点：

+ 虚拟dom
+ 组件化
+ jsx javascript xml

闲谈：

基于web上有reactDom，移动应用上面有reactNative （还是react语法，但是会把reactjs语法转换为原生的objective-c或者是java代码，来生成ios 或者安卓应用。 

一下几个版本需要注意：16，16.3 ，16.8，16.4 

### 创建React 的脚手架 create-react-app

> https://www.npmjs.com/package/create-react-app

```sh
npx create-react-app my-app #必须以中划线小写字母，大写字母是不被允许的
cd my-app
npm start
```

***Installing react, react-dom, and react-scripts with cra-template...***

`react`: 底层api

`react-dom`: 用来写网页的时候渲染页面

`react-native`: 用来专门写app，不在需要上面这个

`react-scripts`: 用来构建react应用的脚本文件，webpack的配置都在react-scripts里面

一般不`npm run eject`来修改配置项，而是直接在外部重写一个config

### 使用React语法

1. 引入库

```javascript
import React from 'react'
import ReactDOM from "react-dom" //要使用它的render方法

```

2. 写代码

```javascript
 ReactDOM.render(
    <h1>Welcome to React!</h1>,//这个是jsx
    document.querySelector('#root')
)


/** 方法参数：
 const render: ReactDOM.Renderer(
      element: React.SFCElement<any> | React.SFCElement<any>[], 
      container: Element | DocumentFragment, 
      callback?: () => void) => void (+6 overloads)
*/
```



3. 函数式组件：

```javascript
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

```



4. 类组件：

```javascript
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

```





5. JSX 原理：




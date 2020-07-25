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

```javascript
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
```



6. 组件中的样式：

##### 使用`Classnames`插件条件拼接classname 

> https://www.npmjs.com/package/classnames 
>
> A simple JavaScript utility for conditionally joining classNames together.

安装：

```shell
npm install classnames --save
```

使用：

```javascript
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
 
// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
 
// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

##### 使用`styled-components`

> https://github.com/styled-components/styled-components

```javascript
import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use them like any other React component – except they're styled!
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```



项目代码：

```javascript
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
```


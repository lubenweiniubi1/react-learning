//Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
import React, { useState, useEffect } from "react"
import { render } from "react-dom"

const Counter = () => {
  console.log(useState(10)) //Array(2) [state ,f()]
  //   const [title, setTitle] = useState("ABC")
  //   console.log(title)

  const [count, setCount] = useState(0)//这里是解构！

  //参数是一个回调 
  useEffect(() => {
    console.log("更新了")
    document.title = `You clicked ${count} times`
  }) //类似于componentDidMount ，componentDidUpdate

  return (
    <div>
      <p>当前的数量为{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

render(<Counter />, document.querySelector("#root"))

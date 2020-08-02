//createContext是react提供的一个用于夸组件传值的方法
import React, { Component, createContext } from "react"
//provider用于 提供状态
const { Provider, Consumer: ConterConsumer } = createContext()

//封装一个基本的provider，因为直接使用不方便管理状态
class CounterProvider extends Component {
  constructor() {
    super()
    //这里的状态是共享的，任何被CounterProvider的后代组件都可以通过CounterConsumer来接收这个值
    this.state = {
      count: 1000,
    }
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  decreCount = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    return (
      //使用Provider组件，必须要有一个value值，这个value值可以传递任何的数据，一般传递一个对象比较合理
      <Provider
        value={{
          count: this.state.count,
          onAdd: this.addCount,
          onDel: this.decreCount,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
export  { CounterProvider, ConterConsumer }

import React, { Component, Fragment } from "react"
import { TodoInput, TodoHeader, TodoList, Like } from "./components"

export default class App extends Component {
  // state = {
  //   title:"待办事项列表"
  // }
  constructor() {
    super()
    this.state = {
      title: "待办事项列表",
      desc: "今日b事儿，今日毕",
      todos: [
        {
          id: 1,
          title: "吃饭",
          isCompleted: true,
        },
        {
          id: 2,
          title: "睡觉",
          isCompleted: false,
        },
      ],
    }
    
  }

  addTodo = (todoTitle) => {
    //这是常见的毛病 3不是一个数组，因为push语句返回的数组长度
    // this.setState({ 报错
    //   todos: this.state.todos.push({
    //     id: Math.random(),
    //     title: todoTitle,
    //     isCompleted: false,
    //   }),//这里返回了新的长度！！
    // })

    if (0) {
      //这个代码不会出事儿
      this.setState({
        todos: this.state.todos.concat({
          id: Math.random(),
          title: todoTitle,
          isCompleted: false,
        }),
      })
      /** array.push
       * 定义和用法push() 方法可向数组的末尾添加一个或多个元素，
       * 并返回新的长度。而不是创建一个新的数组。
       *
       * array.concat
       * 定义和用法
       * concat() 方法用于连接两个或多个数组。
       * 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
       * 参数	描述
       * arrayX	必需。
       * 该参数可以是具体的值，也可以是数组对象。可以是任意多个。
       */
    }
    //可也可以用push
    if (1) {
      const newTodos1 = [...this.state.todos]
      const newTodos = this.state.todos.slice()
      newTodos.push({
        id: Math.random(),
        title: todoTitle,
        isCompleted: false,
      })
      this.setState({
        todos: newTodos,
      })

      /**
       * slice()
       * 参数	描述
       * start	可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
       * 也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
       * end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。
       * 如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
       * 如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
       * 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
       */
    }
  }

  render() {
    //每个renturn 必须只有一个根元素，这里生成额外的dom
    //如果实在不想要，就使用空标签,有两种用法
    if (0) {
      return (
        <Fragment>
          <TodoHeader></TodoHeader>
          <TodoInput />
          <TodoList></TodoList>
        </Fragment>
      )
    }

    if (1) {
      return (
        <>
          <TodoHeader desc={this.state.desc}>
            <i>
              {this.state.title} {/*这里会多一传一个children属性*/}
            </i>
          </TodoHeader>
          <TodoInput addTodo={this.addTodo} />
          <TodoList todos={this.state.todos}></TodoList>
          <Like></Like>
        </>
      )
    }
  }
}

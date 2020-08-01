import React, { Component } from "react"
const noop = () => {}
export default class TodoItem extends Component {
  constructor() {
    super()
    this.state = {
      coxText: "",
    }
  }

  handleChange = () => {
    // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
    const { onCompletedChange = noop, id } = this.props //默认值搞成空函数，保证代码运行不报错
    onCompletedChange && onCompletedChange(this.props.id)
  }

  // UNSAFE_componentWillMount() {
  //   console.log("will mount")
  // }

  // static getDerivedStateFromProps() {//与上面的只能执行其中一个，排他的
  //   return {}
  // }

  //优化
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps)
    // console.log(this.props)

    return nextProps.completed !== this.props.completed
  }

  //静态方法是没有this的，这个是在对象创建之前就存在了
  static getDerivedStateFromProps(props, state) {
    //根据props属性来计算
    // console.log(props, state)
    return {
      compltedText: props.completed ? "完成" : "未完成",
    }
  }

  render() {
    const { completed, title } = this.props
    console.log("todo render", this.state.compltedText)
    return (
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={this.handleChange}
        />
        <span>
          {" "}
          {title} {completed ? "已完成" : "未完成"}
        </span>
      </li>
    )
  }
}

// import React, { PureComponent } from "react"
// const noop = () => {}
// export default class TodoItem extends PureComponent {
//   handleChange = () => {
//     // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)
//     const { onCompletedChange = noop, id } = this.props //默认值搞成空函数，保证代码运行不报错
//     onCompletedChange && onCompletedChange(this.props.id)
//   }

//   render() {
//     const { completed, title } = this.props
//     console.log("todo render")
//     return (
//       <li>
//         <input
//           type="checkbox"
//           checked={completed}
//           onChange={this.handleChange}
//         />
//         <span>
//           {" "}
//           {title} {completed ? "已完成" : "未完成"}
//         </span>
//       </li>
//     )
//   }
// }

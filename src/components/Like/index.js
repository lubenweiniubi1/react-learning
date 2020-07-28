import React, { Component } from "react"

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLiked: true,
    }
  }
  handleLikedClicked = () => {
    //直接修改state 在react是不允许的，能修改数据，但是界面不会重新渲染
    // this.state.isLiked = !this.state.isLiked
    // this.forceUpdate()

    //setState 是异步的
    //有两个参数
    //第一个参数又有两种情况，第一种情况是一个对象
    // this.setState({
    //     isLiked: !this.state.isLiked,
    //   })

    //第二种情况是一个方法,这个方法的参数有上一次的state
    //setState 是异步的
    this.setState(
      (prevState, props) => {
        return {
          // isLiked: !this.state.isLiked,
          isLiked: !prevState.isLiked,
        } //如果一个子组件很多，一个state可能需要根据子组件的返回值来更新，但是异步不确定有没有更新，所以使用上一次的state来保险
      },
      () => {
        //由于setState是异步的，如果想要获取到最新的state，应该在这个回调里面获取
      }
    )
  }
  render() {
    return (
      <div onClick={this.handleLikedClicked}>
        {this.state.isLiked ? "取消❤️" : "喜欢🖤"}
      </div>
    )
  }
}

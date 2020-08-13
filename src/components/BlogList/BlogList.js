import React, { Component } from "react"
import BlogItem from "./BlogItem"
import { connect } from "react-redux"
import { getPosts } from "../../service"
import { fetchBlogList } from "../../actions/blog"

//实际上这是一个容器组件（Smart/Container components)
class BlogList extends Component {
  //这里需要对传入的数据做检测 prop-types

  componentDidMount() {
    this.props.fetchBlogList()
  }

  render() {
    console.log(this.props)
    const { list, isLoading, errMsg } = this.props
    const hasError = Boolean(errMsg)
    return isLoading ? (
      <div>loading...</div>
    ) : hasError ? (
      <div>{errMsg}</div>
    ) : (
      <ul>
        {list.map((blog) => {
          return <BlogItem key={blog.id} {...blog}></BlogItem>
        })}
      </ul>
    )
  }
}

const mapToState = (state) => {
  console.log(state)

  return {
    list: state.blog.list,
    isLoading: state.blog.isLoading,
    errMsg: state.blog.errMsg,
  }
}

export default connect(mapToState, { fetchBlogList })(BlogList)

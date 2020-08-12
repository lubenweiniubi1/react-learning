import React, { Component } from "react"
import BlogItem from "./BlogItem"
import { connect } from "react-redux"
import { getPosts } from "../../service"

class BlogList extends Component {
  //这里需要对传入的数据做检测 prop-types

  componentDidMount() {
    getPosts().then((res) => {
      console.log(111)
      console.log(res)
    })
  }

  render() {
    console.log(this.props)
    const { list, isLoading } = this.props
    return isLoading ? (
      <div>loading...</div>
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
  }
}

export default connect(mapToState)(BlogList)

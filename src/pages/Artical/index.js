import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import ArticalDetail from "./ArticalDetail"
export default class Artical extends Component {
  render() {
    return (
      <div>
        <Link to="/artical/1">文章1</Link>
        <Link to="/artical/2">文章2</Link>
      </div>
    )
  }
}

import React, { Component } from "react"
import {BackHome} from '../../component'
export default class ArticalDetail extends Component {
  goHome = () => {
    // this.props.history.push('/')
    this.props.history.push({
      pathname: "/home",
      state: {
        id: this.props.match.params.id,
      },
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        文章详情{this.props.match.params.id}
        <BackHome/>
      </div>
    )
  }
}

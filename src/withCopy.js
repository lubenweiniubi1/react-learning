import React, { Component } from "react"

const withCopyright = (YourComponent) => {
  return class WithCopyright extends Component {
    render() {
      console.log(this.props)
      return (
        <>
          <YourComponent {...this.props}></YourComponent>
          <div>&copy; 2020 &emsp; 千锋教育</div>
        </>
      )
    }
  }
}

export default withCopyright

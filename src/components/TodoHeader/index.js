import React from "react"
import PropTypes from "prop-types"


//受控组件，所有状态都是通过props来传递的，自身没有状态
export default function TodoHeader(props) {
  console.log(props) //什么都不传 打印 {}
  return (
    <>
      <h1>{props.children}</h1>
      <h3>{props.desc}</h3>
    </>
  )
}

TodoHeader.propTypes = {
  desc: PropTypes.string.isRequired,
}

TodoHeader.defaultProps = {
  desc: "你吗死了"
}
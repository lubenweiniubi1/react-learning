import actionType from "./actionType"
import { useDispatch } from "react-redux"
//action有两种写法

//第一种 携程一个对象，这是标准的action，但是不能方便的动态传递参数

//第二种，actionCreator，他是一个方法返回一个对象，这个对象才是真正的action
export const increment = (id) => {
  return {
    type: actionType.CART_AMOUNT_INCREMENT,
    payload: {
      id,
    },
  }
}
export const decrement = (id) => {
  return {
    type: actionType.CART_AMOUNT_DECREMENT,
    payload: {
      id,
    },
  }
}

export const decrementAsync = (id) => {
  setTimeout(() => {
    useDispatch({
      type: actionType.CART_AMOUNT_DECREMENT,
      payload: {
        id,
      },
    })
  }, 2000)
}
/**
 * 之前：
 *   actionCreator =>自动dispatch（actionCreator())=>reducer=>store=> view
 * 
 * 现在：
 *   actionCreator=> middleware处理新生成的action=>手动dispatch（action）=>reducer=>store=> view
 */
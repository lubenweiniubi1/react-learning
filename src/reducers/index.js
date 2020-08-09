import { combineReducers } from "redux"
import cart from "./cart"

//合并reducer，store只能接收一个reducer
export default combineReducers({
  cart,
})

//在实际的项目中，由于只有电一的store，但是，状态会有很多分类，所以我门需要划分reducer，createStore的参数又只接收一个reducer，所以redux比较聪明提供了用于提供reducer方法，注意，不要手动合并
import { combineReducers } from "redux"
//引入cart reducer，如果有多个，继续引入
import cart from "./cart"

//合并reducer，store只能接收一个reducer，导出合并后的reducer
export default combineReducers({
  //把多个reducer作为combineReducers的对象参数传入，在外部可以通过store.getState().cart来获取到cartReducer里面的state
  cart,
})

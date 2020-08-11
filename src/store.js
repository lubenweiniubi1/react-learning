//createStore是redux提供的一个用于创建store的方法，这个在原理里面讲到过
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import thunk from "redux-thunk"

//createStore 的第一个参数必须使用给reducer，如果是多个，
//请在reducers目录下先使用combineReducers合并之后再导出
export default createStore(rootReducer, applyMiddleware(thunk))

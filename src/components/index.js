//负责导出所有的组件

//第一种写法
//   import TodoHeader from "./TodoHeader"
//   import TodoInput from "./TodoInput"
//   import TodoList from "./TodoList"

//   //导出组件
//   export { TodoHeader, TodoInput, TodoList }

//第二种写法
export { default as TodoHeader } from "./TodoHeader"
export { default as TodoInput } from "./TodoInput"
export { default as TodoList } from "./TodoList"
export { default as Like } from "./Like"

//为了避免actionType重复，所以一般会把actionType放在文件里同意进行管理，也可以避免写错actionType
import actionType from "../actions/actionType"
//cart reducer
//对于这个购物车来说，这里有一个初始化的状态，
const initState = [
  {
    id: 1,
    title: "apple",
    price: 888.98,
    amount: 10,
  },
  {
    id: 2,
    title: "nokia",
    price: 1888.98,
    amount: 12,
  },
]

//创建购物车的reducer，reducer的固定写法是两个参数，第一个是state并有默认值，第二个是action
export default (state = initState, action) => {
  //根据不同的actionType，做不同的处理，每次返回新的state，返回的类型要一样
  switch (action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount += 1
        }
        return item
      })

    case actionType.CART_AMOUNT_DECREMENT:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item.amount -= 1
        }
        return item
      })
    //一定要有default，当actionType不对的时候就不做任何处理，返回上一次的state
    default:
      return state
  }
}

import actionType from "../actions/actionType"
//cart reducer
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

export default (state = initState, action) => {
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
    default:
      return state
  }
}

import React, { Component } from "react"
//导入actionCreators
import { increment, decrement } from "../../actions/cart"
//connect 方法执行之后是一个高阶组件
import { connect } from "react-redux"

//省去了中间传递的环节
const mapStateToProps = (state) => {
  console.log(state) //这里是store里面的state
  //return 了什么，就可以通过 this.props来获取
  return {
    cartList: state.cart,
  }
}

@connect(mapStateToProps, { increment, decrement })
class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartList: [],
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>商品名称</th>
              <th>价格</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cartList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.decrement(item.id)
                      }}
                    >
                      -
                    </button>
                    <span>{item.amount}</span>
                    <button
                      onClick={() => {
                        this.props.increment(item.id)
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}



// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (id) => dispatch(increment(id)),
//     reduce: (id) => dispatch(decrement(id)),
//   }
// } //相当于改名卡

/**
 *  第一个mapStateToProps,作用就是从store里把state注入到当前组件
 *  第二个 mapDispatchToProps作用就是从store里把action注入到当前组件props,一般来说也没必要这样用。
 * 而是直接第二个参数直接传递对象，这里面对象就是actionCreators，只要传入了actionCreators，在组件内就可以通过this.props.actionCreator来调用
 * 这样在调用之后哪个actionCreator就会自动帮你帮你把他内部action dispatch 出去
 */

// export default connect(mapStateToProps, mapDispatchToProps)(CartList)
// export default connect(mapStateToProps, { increment, decrement })(CartList)
export default CartList

//connect 执行之后是个高阶组件
//mapStateToProps 是注入到组件的props，就有props了

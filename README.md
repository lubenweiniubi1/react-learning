 

## React事件

+ 驼峰命名

+ 使用方式

  ```javascript
  //使用箭头函数，但是不推荐，因为箭头函数是匿名函数，每次render的时候都会重新创建一个匿名函数
  onClick={() => {}}
  
  //所以第二种方法比较好，推荐
  handleAddClicked = () => {}
  
  onClick={this.handleAddClicked}
  
  
  //第三种，不推荐，这里可以传值
    handleInput2(id) {
      console.log(this) //undefined ，需要绑定
      console.log(id) //12345
    }
  onClick={this.handleInput2.bind(this,12345)}
  
  //每次渲染都会bind 也不好，我们可以在constructor中bind
    constructor() {
      //只会执行一次
      super()
      this.handleInput2 = this.handleInput2.bind(this) 
    }
  ```

+ 传参

  ```javascript
  //第一种传参的方式，不推荐
  onClick={() => this.handleAddClicked(1234)}
  //第二种，用bind
  onClick={this.handleInput2.bind(this,123)}
  
  
  //第三种，用子组件的方式传递
  //顶层App.js 的addTodo方法
  addTodo = (todoTitle) => {
      console.log(todoTitle)
      //这是常见的毛病 3不是一个数组，因为push语句返回的数组长度
      // this.setState({ 报错
      //   todos: this.state.todos.push({
      //     id: Math.random(),
      //     title: todoTitle,
      //     isCompleted: false,
      //   }),//这里返回了新的长度！！
      // })
  
      if (0) {
        //这个代码不会出事儿
        this.setState({
          todos: this.state.todos.concat({
            id: Math.random(),
            title: todoTitle,
            isCompleted: false,
          }),
        })
        /** array.push
         * 定义和用法push() 方法可向数组的末尾添加一个或多个元素，
         * 并返回新的长度。而不是创建一个新的数组。
         *
         * array.concat
         * 定义和用法
         * concat() 方法用于连接两个或多个数组。
         * 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
         * 参数	描述
         * arrayX	必需。
         * 该参数可以是具体的值，也可以是数组对象。可以是任意多个。
         */
      }
      //可也可以用push
      if (1) {
        const newTodos1 = [...this.state.todos]
        console.log(newTodos1)
        const newTodos = this.state.todos.slice()
        newTodos.push({
          id: Math.random(),
          title: todoTitle,
          isCompleted: false,
        })
        this.setState({
          todos: newTodos,
        })
  
        /**
         * slice()
         * 参数	描述
         * start	可选。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。
         * 也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。
         * end	可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。
         * 如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。
         * 如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。
         * 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
         */
      }
    }
   <TodoInput addTodo={this.addTodo} />
       
  //TodoInput.js
   handleAddClicked = (d) => {
      this.props.addTodo(this.state.inputValue)
    }
  <button onClick={this.handleAddClicked}>{this.props.btnDetail}</button>
  
  ```

  
# 高阶组件

高阶组件（HOC Heigher-Order component）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。





### 闭包：

```javascript
var add = (x,y) => {
    return x+ y 
}
 
add(1,2)
//3
var add = (x)=>{//外面这一层函数就叫 ：高阶函数
    return (y)=>{
        return x+y 
    }
}
 
add(1)(2)//3
```

同理，如果return一个组件的话，外层的函数就叫高阶组件

函数式编程书籍：

> https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/
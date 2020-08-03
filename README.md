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

同理， 高阶组件：是接收一个组件作为参数，并返回一个新组件的函数。

函数式编程书籍：

> https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/

### 装饰器高阶组件：

定制化CRA（脚手架）

### react-app-rewired

> https://www.npmjs.com/package/react-app-rewired
>
> Tweak the create-react-app webpack config(s) without using 'eject' and without creating a fork of the react-scripts.

### customize-cra

> https://www.npmjs.com/package/customize-cra
>
> This project provides a set of utilities to customize [`create-react-app`](https://github.com/facebook/create-react-app) versions 2 and 3 configurations leveraging [`react-app-rewired`](https://github.com/timarney/react-app-rewired/) core functionalities.





## 总结：

让cra支持@装饰器写法

1. 不管你是要配置什么，我们最好的方式是使用`react-app-rewired`这个包来对`cra`创建的项目进行轻微的配置调整
2. 安装好之后，再package.json里把`scripts`里的`react-scripts` 替换成 `react-app-rewired` 
3. 在根目录下创建`config-overrides.js`

```javascript
/* config-overrides.js */
 
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  return config;
}
```

4. 当然如果想要配置方便，可以再安装`customize-cra` ，把`config-overrides.js` 改成这样：

```javascript
const { override, addDecoratorsLegacy ,disableEsLint} = require("customize-cra")

module.exports = override(addDecoratorsLegacy())

```

**vue很多生态 更官方化，react很多生态更社区化**
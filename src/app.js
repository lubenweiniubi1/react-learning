import React, { Component } from "react"
import { Artical, Home, Users, ArticalDetail,NotFound } from "./pages"
import { Route, NavLink as Link, Redirect, Switch } from "react-router-dom"
export default class App extends Component {
  render() {
    console.log(this.props) //Route组件包起来会自动注入一些属性
    return (
      <div>
        app
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
          <li>
            <Link to="/artical">文章</Link>
          </li>
          <li>
            <Link to="/users">用户</Link>
          </li>
        </ul>
        <Switch>
          <Route component={Home} path="/home"></Route>
          <Route component={Artical} path="/artical" exact></Route>完全匹配，多一个/都不行
          <Route component={ArticalDetail} path="/artical/:id"></Route>
          <Route component={Users} path="/users"></Route>
          <Route component={NotFound} path="/404"></Route>
          <Redirect to="/home" from="/" exact/>
          <Redirect to="/404"></Redirect>
        </Switch>
      </div>
    )
  }
}

import React, { Component } from "react"
import { Artical, Home, Users } from "./pages"
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
          <Redirect to="/home" exact from="/accb" />
          <Route component={Home} path="/home"></Route>
          <Route component={Artical} path="/artical"></Route>
          <Route component={Users} path="/users"></Route>
        </Switch>
      </div>
    )
  }
}

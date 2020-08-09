import React, { Component } from 'react'
import {CartList} from './components'

export default class App extends Component {
    render() {
        console.log({...this.props.store});
        return (
            <div>
                <CartList store={this.props.store}/>
            </div>
        )
    }
}

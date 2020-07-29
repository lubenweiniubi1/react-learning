import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state = {
            isLiked : false
        }
    }

    render() {
        return (
            <div>
                {this.state.isLiked? "取消 🧡": "喜欢 🖤"}
            </div>
        )
    }
}

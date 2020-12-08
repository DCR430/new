import React, { Component } from 'react'
import Post from "./Post.js"

export default class header extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to our App!</h1>
                <p>Hello!</p>
                <Post/>
            </div>
        )
    }
}

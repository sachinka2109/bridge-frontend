import React, { Component } from 'react'

export default class Subscribe extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor! Click below to Subscribe'
        }
    }

    changeMessage() {
        this.setState({message: 'Thankyou for Subscribing!'})
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class RenderCounterClass extends Component {
  render() {
    const {count,incrementCounter} = this.props
    return (
      <div>
        <button onClick={incrementCounter}>Clicked {count} Times</button>
      </div>
    )
  }
}

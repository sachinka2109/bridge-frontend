import React, { Component } from 'react'

export default class RenderHoverClass extends Component {

  render() {
    const {count,incrementCounter} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>
      </div>
    )
  }
}

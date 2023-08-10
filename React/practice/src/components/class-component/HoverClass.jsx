import React, { Component } from 'react'
import UpdatedComponent from './HOCClass'

class HoverClass extends Component {
  render() {
    const {count,incrementCounter} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCounter}>Hovered {count}</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverClass) 
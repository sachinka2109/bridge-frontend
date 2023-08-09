import React, { Component } from 'react'

export default class HigherOrderClass extends Component {
    constructor(props) {
      super(props)
    }


    render() {
    return (
      <div>
        <h1 ref={this.headerRef}>I am Hovered</h1>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class RenderNameClass extends Component {
  render() {
    return (
      <div>{this.props.render(true)}</div>
    )
  }
}

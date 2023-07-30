import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <p>Welcome {this.props.name}</p>
      </div>
    )
  }
}

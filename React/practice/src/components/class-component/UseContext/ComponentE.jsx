import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './UseContextClass'

class ComponentE extends Component {
  render() {
    return (
      <div>
        <h3>This is {this.context.name}{this.context.nickname}</h3>
        <ComponentF/>
      </div>
    )
  }
}

ComponentE.contextType = userContext
export default ComponentE
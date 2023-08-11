import React, { Component, createRef } from 'react'
import RefClass from './RefClass'

export default class RefWithClass extends Component {
    constructor(props) {
      super(props)
        this.componentRef = createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <RefClass ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

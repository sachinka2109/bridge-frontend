import React, { Component } from 'react'
import UpdatedComponent from './HOCClass'

class CounterClass extends Component {
  render() {
    const {count,incrementCounter} = this.props
    return (
      <div>
        {count}
        <button onClick={incrementCounter}>{this.props.name} Click</button>
      </div>
    )
  }
}

export default UpdatedComponent(CounterClass) 
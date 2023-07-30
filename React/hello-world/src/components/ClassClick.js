import React, { Component } from 'react'

export default class ClassClick extends Component {
  myClick(){
    console.log('classClick')
  }
  render() {
    return (
      <div>
        <button onClick={this.myClick}>Class Click</button>
      </div>
    )
  }
}

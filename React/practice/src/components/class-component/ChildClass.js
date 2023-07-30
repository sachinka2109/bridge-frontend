import React, { Component } from 'react'

export default class ChildClass extends Component {

  render() {
    const {myCollege} = this.props
    return (
      <div>
        <button onClick={() => myCollege('Palghar')}>Click me to alert your college name</button>
      </div>
    )
  }
}

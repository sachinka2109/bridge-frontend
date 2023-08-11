import React, { Component } from 'react'
import ChildClass from './ChildClass'

export default class ParentClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        college: 'St John College Of Engineering and Management'
      }

      this.showCollege = this.showCollege.bind(this)
    }

    showCollege(location) {
        alert(`Your College is ${this.state.college} which is in ${location}`)
    }

  render() {
    return (
      <div>
        <ChildClass myCollege= {this.showCollege}/>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class StateClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: 'User',
      bday: '21-09-2000',
      clicked: 'false'
    }
    this.changeName = this.changeName.bind(this)
    this.changeBack = this.changeBack.bind(this)
  }

  changeName() {
    this.setState({
      name: 'Sachin'
    })
  }

  changeBack() {
    this.setState({
      name: 'User'
    },() => {
      console.log('change back')
    })
  }

  showBday = () => {
    this.setState((prev) =>({
      clicked: !prev.clicked,
    }))
  }

  render() {
    return (
      <div>
        <h1>This is a prop containg value {this.props.hobby}</h1>
        <h2 onMouseEnter={this.changeName} onMouseLeave={this.changeBack}>Hello {this.state.name}</h2>
        <p>{this.state.clicked ? this.state.bday : this.state.name}</p>
        <button onClick={this.showBday}>Click to know Bday</button>
      </div>   
    )
  }
}

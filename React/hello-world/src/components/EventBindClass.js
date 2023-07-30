import React, { Component } from 'react'

export default class EventBindClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      message: 'Hii This is a message'
    }
    this.myClick = this.myClick.bind(this);
  }

  myClick() {
    this.setState({
      message: 'Message Changed'
    })
  }
  // myClick = () => {
  //   this.setState({
  //     message: 'Message Changed'
  //   })
  // }



  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.myClick.bind(this)}>Event Binding in class</button>
        <button onClick={()=> this.myClick()}>Arrow function</button>
        <button onClick={this.myClick}>Constructor</button>
      </div>
    )
  }
}

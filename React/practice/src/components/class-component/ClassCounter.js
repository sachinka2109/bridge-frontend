import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
        counter: this.state.counter + 1
    })
  }

  decrementCounter() {
    this.setState({
        counter: this.state.counter - 1 
    });
  }

  render() {
    if(this.state.counter < 0) {
        this.setState({
            counter: 0
        })
    }
    return (
      <div>
        <div className="container">
          <h3>Count - {this.state.counter}</h3>
          <button onClick={this.incrementCounter}>Increase Counter</button><br/>
          <button onClick={this.decrementCounter}>Decrement Counter</button>
        </div>
      </div>
    );
  }
}

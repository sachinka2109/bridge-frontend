import React, { Component } from 'react'

export default class CreateElement extends Component {

  render() {
    // return React.createElement('div', null,'Hello world','This is children','another')
    // return React.createElement('div',{'className':'my-container','id':'my-container'},'Hello World')
    return React.createElement('div', {'className':'my-container','id':'my-container'},
      React.createElement('h1',null,'Hello world')
    )
  }
}

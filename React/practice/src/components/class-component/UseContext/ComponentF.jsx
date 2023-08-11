import React, { Component } from 'react'
import { UserConsumer } from './UseContextClass'

export default class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
          ({name,nickname}) => {
              return <div>Hello {name} {nickname}</div>
          }
        }
      </UserConsumer>
    )
  }
}

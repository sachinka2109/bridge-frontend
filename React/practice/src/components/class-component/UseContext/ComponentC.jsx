import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserProvider } from './UseContextClass'

export default class ComponentC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        username: ''
      }
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

  render() {
    return (
      <div>
        <UserProvider value={{name:this.state.name,nickname:this.state.username}} >
          <input type="text" value={this.state.name} onChange={this.onChangeName}/>
          <input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
          <ComponentE/>
        </UserProvider>
      </div>
    )
  }
}

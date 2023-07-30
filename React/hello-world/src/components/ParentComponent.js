import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentname: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentname} from ${childName}`)
    }



    render() {
        return (
            <ChildComponent greetHandler={this.greetParent}/>
        )
    }
}

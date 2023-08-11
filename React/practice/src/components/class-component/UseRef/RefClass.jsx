import React, { Component, createRef } from 'react'

export default class RefClass extends Component {
    constructor(props) {
      super(props)
        this.inputRef = createRef()
        // this.cbRef = null
        // this.setCbRef = element => {
        //     this.cbRef = element
        // }
    }
    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        // if(this.cbRef) {
        //     this.cbRef.focus()
        // }
    }
    focusInput() {
        this.inputRef.current.focus() 
    }
    // handleClick = () => {
    //     alert(this.cbRef.value)
    // }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        {/* <input type='text' ref={this.setCbRef} /> */}
        {/* <button onClick={this.handleClick}>Submit</button> */}
      </div>
    )
  }
}

import React, { Component } from 'react'

const UpdatedComponent = OriginalComponent => {

    class HOCClass extends Component {
        constructor(props) {
        super(props)
        
        this.state = {
            count:0
        }
        }
        incrementCounter () {
            this.setState((prevCount) => {
                return {count: prevCount.count +1}
            })
        }
        render() {
            return <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter}/>
        }
    }
    return HOCClass
}
export default UpdatedComponent
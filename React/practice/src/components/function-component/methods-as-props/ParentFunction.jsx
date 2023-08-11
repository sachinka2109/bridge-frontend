import React from 'react'
import ChildFunction from './ChildFunction'

function ParentFunction() {
    function greetMe(band) {
        alert(`Hello from parent function This is ${band}`)
    }
  return (
    <div>
        <ChildFunction greet={greetMe}/>
    </div>
  )
}

export default ParentFunction
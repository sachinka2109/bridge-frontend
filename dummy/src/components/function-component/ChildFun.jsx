import React from 'react'
import { useState } from 'react'

function ChildFun(props) {
  let [color,changeColor] = useState('red');

  return (
    <div>
      <input type="text" value={color} onChange={(e) =>changeColor(color = e.target.value)}/>
      <button onClick={() => props.changeColor(color)}>Click Me</button>
    </div>
  )
}

export default ChildFun
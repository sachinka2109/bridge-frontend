import React, { useState } from 'react'
import ComponentEFun from './ComponentEFun'
import { ColorProvider } from './UseContextFun';

function ComponentCFun() {
  let [color,setColor] = useState('black');
  let changeColor =() => {
    color === 'red' ? setColor(color= 'black') :setColor(color = 'red' );
  }
  return (
    <div>
      <ColorProvider value={color}>      
        <button onClick={changeColor}>Click me To change color</button>
        <ComponentEFun />
      </ColorProvider>
    </div>
  )
}

export default ComponentCFun
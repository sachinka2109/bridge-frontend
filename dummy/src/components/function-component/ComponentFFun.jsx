import React from 'react'
import { ColorConsumer } from './UseContextFun'

function ComponentFFun() {
  return (
    <ColorConsumer>
    {
      (color) => {
        return <div style={{width:'100px',height:'100px',backgroundColor:`${color}`}}>The Color is {color}</div>
      }
    }
    </ColorConsumer>
  )
}

export default ComponentFFun
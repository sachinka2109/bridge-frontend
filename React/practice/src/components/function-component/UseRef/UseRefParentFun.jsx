import React, { useRef } from 'react'
import UseRefChildFun from './UseRefChildFun'

function UseRefParentFun() {
  let changeBackground = useRef();
  return (
    <div>
      <div style={{width:'200px',height:'200px',backgroundColor:'black',color:'white'}} ref={changeBackground}>
        <h5 style={{textAlign:'center'}}>My background will Change</h5>
      </div>
      <UseRefChildFun changeBackground= {changeBackground}/>
    </div>
  )
}

export default UseRefParentFun
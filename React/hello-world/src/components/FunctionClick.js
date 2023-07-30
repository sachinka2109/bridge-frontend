import React from 'react'

function FunctionClick() {
    function myClick() {
        console.log('myFunctionClick');
    }
  return (
    <div>
        <button onClick={myClick}>Function Click</button>
    </div>
  )
}

export default FunctionClick
import React, { useEffect, useState } from 'react'

function UseEffectFun() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log('Use Effect on  Mount')
  },[])

  useEffect(() => {
    console.log('Use Effect on  Condition')
  },[count])

  useEffect(() => {
    console.log('Use Effect on Cleaning up')
    return () => {
      console.log('Use Effect on unmount')
    }
  },[])

  return (
    <div>
    {count}
    <button onClick={() =>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectFun
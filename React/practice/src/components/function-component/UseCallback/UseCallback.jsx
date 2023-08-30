import React, { useCallback, useState } from 'react'
import CBButton from './CBButton';

function UseCallback() {
  const [count,setCount] = useState(0);
  const [counttwo,setCounttwo] = useState(0);
  const incrementCounterOne = useCallback(() => {
    setCount(count + 1)
    console.log('IncrementCount')
  },[count])
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementCounterOne}>Increase Count</button>
      <h2>{counttwo}</h2>
      <CBButton counttwo={counttwo} setCounttwo={setCounttwo}/>
    </div>
  )
}

export default UseCallback
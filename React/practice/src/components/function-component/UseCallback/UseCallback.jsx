import React, { useCallback, useState } from 'react'

function UseCallback() {
    const [count,setCount] = useState(0);
    const [counttwo,setCounttwo] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={useCallback(() => setCount(count+1),[count])}>Increase Count</button>
      <h2>{counttwo}</h2>
      <button onClick={useCallback(() => setCounttwo(counttwo+1),[counttwo])}>Increase Count 2</button>
    </div>
  )
}

export default UseCallback
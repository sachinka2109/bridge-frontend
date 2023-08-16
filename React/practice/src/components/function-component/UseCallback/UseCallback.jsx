import React, { useState } from 'react'

function UseCallback() {
    const [count,setCount] = useState(0);
    const [counttwo,setCounttwo] = useState(0);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCounttwo(count+1)}>Increase Count</button>
        <h2>{counttwo}</h2>
        <button onClick={() => setCounttwo(counttwo+1)}>Increase Count 2</button>
    </div>
  )
}

export default UseCallback
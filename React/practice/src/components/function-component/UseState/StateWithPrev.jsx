import React, { useState } from 'react'

function StateWithPrev() {
    const initialValue = 0
    const [value,setValue] = useState(initialValue);

    let incrementState = () => {
        setValue((prevState) => (prevState + 5))
    }
  return (
    <div>
        {value}
        <button onClick={incrementState}>increment</button>
    </div>
  )
}

export default StateWithPrev
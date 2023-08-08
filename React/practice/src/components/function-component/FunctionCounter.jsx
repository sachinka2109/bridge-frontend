import React,{useState} from 'react'

function FunctionCounter() {
  const [count,setCount] = useState(0);
  let incrementButton = () => {
    setCount(count + 1);
  }
  let decrementButton = () => {
    setCount(count - 1);
  }
  if(count < 0) {
    setCount(0);
  }
  return (
    <div>
        <div className="container">
            <h3>Count - {count}</h3>
            <button onClick={incrementButton}>Increment button</button>
            <button onClick={decrementButton}>Decrement button</button>
        </div>
    </div>
  )
}

export default FunctionCounter
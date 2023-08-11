import React from 'react'
import { useRef,useState } from 'react';

function UseRefCounter() {
    const counterRef = useRef(0);
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        counterRef.current += 1;
        setCount(count + 1);
    };
  return (
    <div>
        <h2>Counter value : {counterRef.current}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <p>Render count: {count}</p>
    </div>
  )
}

export default UseRefCounter
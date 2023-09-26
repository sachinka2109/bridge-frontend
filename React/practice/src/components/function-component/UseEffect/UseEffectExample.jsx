import React, { useEffect, useState } from 'react'

function UseEffectExample() {
    let [value,setValue] = useState('apple');
    let [count,setCount] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setValue('banana')
        },2000)
    },[])

    let incrementCount = () => {
        setCount(count + 1)
    }


    useEffect(() => {
        console.log('IncrementedCount',count)
    },[count])

    useEffect(() => {
        let interval = setInterval(() => {
            console.log('Mounting the component now') 
        }, 5000);

        return() => {
            clearInterval(interval)
            console.log('Component will unmount');
        }
    },[])

  return (
    <div>
        <h2>{value}</h2>
        <h3>Count: {count}</h3>
        <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default UseEffectExample
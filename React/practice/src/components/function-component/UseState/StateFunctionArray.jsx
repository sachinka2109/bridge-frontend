import React from 'react'
import { useState } from 'react'

function StateFunctionArray() {
    let [fruits, setFruits] = useState(['apple','orange','banana','pineapple']);
    let [newFruit,setNewFruit] = useState('');
    const addFruit = () => {
        setFruits([...fruits,newFruit]);
        setNewFruit('');
    }
    // const removeFromFirst = () => {}
    const deleteFruit = () => {
        setFruits([...fruits.slice(0, -1)]);
    }

    const removeFruit = (index) => {
        const updatedFruits = fruits.filter((fruit, i) => i !== index);
        setFruits(updatedFruits)
    }
  return (
    <div>
        {fruits.map((f,i) => {
            return <h2 key={i}>{f} <button onClick={() => removeFruit(i)}>remove Fruit</button></h2>
        })}
        <input type="text"  value={newFruit} onChange={(e) => {setNewFruit(e.target.value)}}/>
        <button onClick={addFruit}>click</button>
        {/* <button onClick={removeFromFirst}>Remove from First</button> */}
        <button onClick={deleteFruit}>Remove from Last</button>
    </div>
  )
}

export default StateFunctionArray
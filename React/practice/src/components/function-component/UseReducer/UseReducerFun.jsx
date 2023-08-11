import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (currentState,action) => {
    switch (action) {
        case 'INCREMENT': 
            return currentState + 1;
        case 'DECREMENT':
            return currentState - 1;
        case 'RESET':
            return initialState;
        default: 
            return currentState;
    }
}

function UseReducerFun() {
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=> dispatch('INCREMENT')}>Increment</button>
        <button onClick={()=> dispatch('DECREMENT')}>Decrement</button>
        <button onClick={()=> dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default UseReducerFun
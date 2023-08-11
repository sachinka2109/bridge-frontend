import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0,
    secondCounter:0
};
const reducer = (currentState,action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {...currentState,firstCounter: currentState.firstCounter + action.value};
        case 'DECREMENT':
            return {...currentState,firstCounter: currentState.firstCounter - action.value};
        case 'INCREMENT2': 
            return {...currentState,firstCounter: currentState.secondCounter + action.value};
        case 'DECREMENT2':
            return {...currentState,firstCounter: currentState.secondCounter - action.value};
        case 'RESET':
            return initialState;
        default: 
            return currentState;
    }
}


function UseReducerObject() {
    const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        <h2>Count : {count.firstCounter}</h2>
        <button onClick={()=> dispatch({type:'INCREMENT',value:1})}>Increment</button>
        <button onClick={()=> dispatch({type:'DECREMENT',value:1})}>Decrement</button>
        <button onClick={()=> dispatch({type:'INCREMENT',value:5})}>Increment By 5</button>
        <button onClick={()=> dispatch({type:'DECREMENT',value:5})}>Decrement By 5</button>
        <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default UseReducerObject
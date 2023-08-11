import React, { useReducer } from 'react'

const inititalState = ['apple','mango','banana']
const reducer = (state,action) => {
    switch(action) {
        case 'AddItem':
            return [...state, 'newItem'];
        case 'DeleteItem':
            return state.slice(0,-1);
        default: 
            return state;
    }
}


function UseReducerExample() {
    const [items,dispatch] = useReducer(reducer,inititalState)
  return (
    <div>
        {items.map((item,index) => {
            return <p key={index}>{item}</p>
        })}
        <input type="text"/>
        <button onClick={()=>dispatch('AddItem') }>Add Item</button>
        <button onClick={()=>dispatch('DeleteItem') }>Remove Item</button>
    </div>
  )
}

export default UseReducerExample
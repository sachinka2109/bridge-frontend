import React, { useContext } from 'react'
import { countContext } from '../../../App'

function UseRedCompC() {
    const countContexts = useContext(countContext)
  return (
    <div>
        <h2>Count : {countContexts.countState}</h2>
        <button onClick={()=> countContexts.dispatch({type:'INCREMENT',value:1})}>Increment</button>
        <button onClick={()=> countContexts.dispatch({type:'DECREMENT',value:1})}>Decrement</button>
        <button onClick={()=> countContexts.dispatch({type:'INCREMENT',value:5})}>Increment By 5</button>
        <button onClick={()=> countContexts.dispatch({type:'DECREMENT',value:5})}>Decrement By 5</button>
        <button onClick={()=> countContexts.dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default UseRedCompC
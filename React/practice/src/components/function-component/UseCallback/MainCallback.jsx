import React, { useCallback, useState } from 'react'
import CallbackList from './CallbackList'

function MainCallback() {
    const [number,setNumber] = useState(1)
    const [dark,setDark] = useState(false)
    const getItems = useCallback(() => {
        console.log('getItems')
        return [number,number+1,number+2]
    },[number])

    const theme = {
        backgroundColor: dark? 'black' : 'white',
        color: dark? 'white' : 'black',
    }
  return (
    <div style={theme}>
        <input type='number'  value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={()=> setDark(prevDark => !prevDark)}>Toggle theme</button>
        <CallbackList getItems={getItems}/>
    </div>
  )
}

export default MainCallback
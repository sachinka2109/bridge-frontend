import React, { useEffect, useRef } from 'react'
import UseRefFun from './UseRefFun'

function UseRefButton() {
    let focusInput = useRef(null)

    // let focusHandler = () => {
    //     focusInput.current.focusInput()
    // }

    useEffect(()=> {
      focusInput.current.focus()
    },[])



  return (
    // <div>
    //     <UseRefFun setFocusInput ={ref => focusInput.current = ref}/>
    //     <button onClick={focusHandler}>Focus input</button>
    // </div>
    <div>
      <input type="text" ref={focusInput}/>
    </div>
  )
}

export default UseRefButton
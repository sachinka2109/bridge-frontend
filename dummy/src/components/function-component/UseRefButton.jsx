import React, { useRef } from 'react'
import UseRefFun from './UseRefFun'

function UseRefButton() {
    let focusInput = useRef()

    let focusHandler = () => {
        focusInput.current.focusInput()
    }
  return (
    <div>
        <UseRefFun setFocusInput ={ref => focusInput.current = ref}/>
        <button onClick={focusHandler}>Focus input</button>
    </div>
  )
}

export default UseRefButton
import React from 'react'
import { useEffect } from 'react';

function Task() {
    useEffect(() => {
        console.log('I am Mounted')
        
        return () => {
                console.log('I am unmounted')
      
        }
        // let interval = setInterval(() => {
        //     console.log('Called on every 5 sec')
        // }, 5000)

        // return () => {
        //     clearInterval(interval);
        //     console.log('Unmounted the interval')
        // }
    },[])
    
  return (
    <div></div>
  )
}

export default Task
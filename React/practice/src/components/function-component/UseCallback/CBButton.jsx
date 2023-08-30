import React, { useCallback } from 'react'

function CBButton(props) {
    const IncrementCount = useCallback(() => {
        props.setCounttwo(prevCount => prevCount + 1);
        console.log('IncrementCountTwo')
    }, []);
  return (
    <div>
        <button onClick={IncrementCount}>Increment Counter 2</button>
    </div>
  )
}

export default CBButton
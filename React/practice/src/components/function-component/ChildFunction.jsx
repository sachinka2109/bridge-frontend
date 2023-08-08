import React from 'react'

function ChildFunction(props) {
  return (
    <div>
        <button onClick={() => props.greet('Nirvana')}>Greetings Button</button>
    </div>
  )
}

export default ChildFunction
import React from 'react'

// function Greet() {
//   return (
//     <h1>Greetings</h1>
//   )
// }

// export const Greet = () => <h1>Hello</h1>   // Named Export

export const Greet = (props) => {
    return (
        <div className="">
            <p>{props.name}</p>
            <p>{props.children}</p>
        </div>
    )
}                           // tag, additional props 

// export default Greet
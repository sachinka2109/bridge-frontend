import React,{useRef, useState} from 'react';


function StateFunction() {
    let [name,setName] = useState('Sachin');
    let elementRef = useRef(null);
    // let [myTitle,setTitle] = useState('This is the title')

    // function mouseOver() {
    //    setTitle(myTitle = 'Hello the title changed') 
    // }

    // function mouseLeave() {
    //     setTitle(myTitle = 'This is the title') 
    // }

    // return(
    //     <div className="">
    //         <div className="container" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
    //             <p>{myTitle}</p>
    //         </div>
    //     </div>
    // )

    function changeText() {
        if(elementRef.current) {
            elementRef.current.innerHTML='Click me now'
            elementRef.current.style.backgroundColor= 'green'
            elementRef.current.style.color= 'white'
        }
    }

    return(
        <div className="">
            <p>{name}</p>
            <button ref={elementRef} onClick={() => setName(name === 'Dahaka' ? 'Sachin' : 'Dahaka')} onMouseEnter={changeText}>Click to change Name</button>
        </div>
    )
}

export default StateFunction
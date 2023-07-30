import React,{useRef} from 'react'

function FunctionProps(props) {
//   return (
//     <div>
//         <p>Hello my Name is {props.name}</p>
//     </div>
//   )


    // return(
    //     <div className="">
    //         <div className="container">
    //             <p>Villian - {props.name}</p>
    //             <p>Movie - {props.movieName}</p>
    //         </div>
    //     </div>
    // )
    const elementRef = useRef(null);
    function changeColor() {
        if(elementRef.current) {
            elementRef.current.style.backgroundColor = 'red';
            elementRef.current.style.color = 'white';
        }
    }
    function changeBack() {
        if(elementRef.current) {
            elementRef.current.style.backgroundColor = 'white';
            elementRef.current.style.color = 'black';
        }
    }

    return(
        <div className="">
            <div className="container">
                <h1>Villian - {props.name}</h1>
                <h2>Movie - {props.movieName}</h2>
                {/* <marquee behavior="scroll">{props.children}</marquee> */}
                <h5 ref={elementRef} onMouseOver={changeColor} onMouseLeave={changeBack}>{props.children}</h5>
            </div>
        </div>
    )
}

export default FunctionProps
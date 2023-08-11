import React, { useRef } from 'react'

function UseRefChildFun(props) {
    let changeBackground = () => {
        if (props.changeBackground.current) {
            props.changeBackground.current.style.backgroundColor = getRandomBackground();
        }
    }

    let getRandomBackground = () => {
        let colorCode = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i< 6; i++) {
            color += colorCode[Math.floor(Math.random()* 16)];
            console.log(color);
        }
        return color;
    }
  return (
    <div>
        <button onClick={changeBackground}>Change background</button>
    </div>
  )
}

export default UseRefChildFun
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function Canvas() {
    const canvasRef = useRef(null)

    useEffect(()=> {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // // Filled rectangle
        // context.fillStyle = 'blue';
        // context.fillRect(50,50,200,100)
        // // Outline of Rectangle and border
        // context.strokeStyle = 'red'
        // context.strokeRect(100, 100, 200, 300);
        // context.clearRect(50, 50, 200, 300);
        // // Draw a path
        // context.lineTo(500, 500);
        // context.beginPath();
        // context.moveTo(500, 500);
        // context.lineTo(400, 400);
        // context.closePath(); // Optionally close the path
        // context.stroke(); 

        // // Draw a circle
        context.beginPath();       // Start a new path
        context.arc(200, 200, 100,0,7, false); // Define a 90-degree arc
        context.strokeStyle = 'blue'; // Set the stroke color to blue
        context.stroke();          // Actually draw the arc
        
        context.beginPath(); // Start a new path
        context.moveTo(0, 400); // Move to the starting point
        context.lineTo(500, 400); // Draw a line to the ending point
        context.strokeStyle = 'red'; // Set the stroke color to red
        context.lineWidth = 2; // Set the line width
        context.stroke(); // Draw the line

        context.closePath(); // Close the path (optional)
        // // texts
        // context.fillText('Hello World', 80, 90);
        // context.strokeText('Canvas', 100, 200);

        // // Images

        // const image = new Image();
        // image.src = 'React/practice/public/logo192.png';
        // image.onload = () => {
        //     context.drawImage(image, 200, 200, 200, 500);
        // };
        // let drawing = false;

        // canvas.addEventListener('mousedown', (e) => {
        //     drawing = true;
        //     context.beginPath();
        //     context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        // });

        // canvas.addEventListener('mousemove', (e) => {
        //     if (!drawing) return;
        //     context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        //     context.stroke();
        // });

        // canvas.addEventListener('mouseup', () => {
        //     drawing = false;
        //     context.closePath();
        // });

        // canvas.addEventListener('mouseleave', () => {
        //     drawing = false;
        //     context.closePath();
        // });

    },[])
  return (
    <>    
        <canvas
        ref={canvasRef}
        width={500} // Set the canvas width
        height={500} // Set the canvas height
        style={{border:'1px solid black'}}
        ></canvas>
    </>
  )
}

export default Canvas
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function Canvas() {
    const canvasRef = useRef(null)

    useEffect(()=> {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // context.beginPath();
        context.fillStyle = '#A03037';
        context.fillRect(0,0,1292,60)

        context.fillStyle = 'white';
        context.fillRect(400,13,450,35)

        context.fillStyle = 'white';
        context.font = '24px Arial'; 
        context.fillText('Bookstore',200,40)

        const searchIcon = new Image();
        searchIcon.src = 'https://www.flaticon.com/free-icon/search_3031293'; // Replace with the actual path to your search icon SVG
        searchIcon.onload = () => {
          
          context.drawImage(searchIcon, 420, 20, 20, 20); // Adjust the position and size of the icon as needed
        };

        context.fillStyle = 'grey';
        context.font = '16px Arial'; 
        context.fillText('Search...',430,37)

        // context.stroke();

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
        // context.beginPath();       // Start a new path
        // context.arc(200, 200, 100,0,7, false); // Define a 90-degree arc
        // context.strokeStyle = 'blue'; // Set the stroke color to blue
        // context.stroke();          // Actually draw the arc
        
        // context.beginPath(); // Start a new path
        // context.moveTo(0, 200); // Move to the starting point
        // context.lineTo(200, 200); // Draw a line to the ending point
        // context.strokeStyle = 'red'; // Set the stroke color to red
        // context.lineWidth = 2; // Set the line width
        // context.stroke(); // Draw the line

        // context.closePath(); // Close the path (optional)
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
        // context.beginPath();
        // context.fillStyle = 'red';
        // context.fillRect(300,300,50,50)
        // context.stroke()

        // context.beginPath();
        // context.strokeStyle = 'green';
        // context.strokeRect(200,200,60,60)
        // context.stroke()
    },[])
  return (
    <>    
        <canvas
        ref={canvasRef}
        width={1292} // Set the canvas width
        height={500} // Set the canvas height
        style={{border:'1px solid black'}}
        ></canvas>
    </>
  )
}

export default Canvas
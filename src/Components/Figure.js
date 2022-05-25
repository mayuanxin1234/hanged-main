import React, { useRef, useEffect } from 'react'

const Figure = ({wrongLetters}) => {

    const errors = wrongLetters.length;
    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle = '#000000'
        //Rod
        ctx.beginPath()
        ctx.moveTo(50, 150)
        ctx.lineTo(100,150)
        ctx.moveTo(75, 150)
        ctx.lineTo(75,0)
        ctx.moveTo(75, 0)
        ctx.lineTo(150,0)
        ctx.moveTo(150, 0)
        ctx.lineTo(150,20)
        ctx.stroke();
        // Head
        if (errors == 1) {     
          ctx.moveTo(170, 35)      
        ctx.arc(150, 40, 20,0,2 * Math.PI);
      ctx.stroke();}
        //Body
        if (errors == 2) {
          ctx.moveTo(150,60);
          ctx.lineTo(150,110);
          ctx.stroke();
        } 
        //Arms
        if (errors == 3) {
          ctx.moveTo(150,70);
          ctx.lineTo(130,90);
          ctx.stroke();
        } 
        if (errors == 4) {
          ctx.moveTo(150,70);
          ctx.lineTo(170,90);
          ctx.stroke();
        }
     
          //Legs
          if (errors == 5) {          
            ctx.moveTo(150,110);
            ctx.lineTo(130,130);
            ctx.stroke();
          }
          if (errors == 6) {        
            ctx.moveTo(150,110);
            ctx.lineTo(170,130);
            ctx.stroke();
          }         
        
      }

    useEffect(() => {
    var canvas = canvasRef.current
    var context = canvas.getContext('2d')
    draw(context)},[draw])
  return (    

    <canvas ref = {canvasRef} />   
    
  )
}

export default Figure
import React, { useRef, useEffect } from 'react'

const Figure = ({wrongLetters}) => {

    const errors = wrongLetters.length;
    const canvasRef = useRef(null)

    var draw = ctx => {
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
        {errors > 0 && ctx.moveTo(150,20);
        ctx.arc(150, 50, 30,0,2 * Math.PI)}
        //Body
        {errors > 1 && ctx.moveTo(150,20);
          ctx.arc(150, 50, 30,0,2 * Math.PI)}
        //Arms
        {errors > 2 && ctx.moveTo(150,20);
          ctx.arc(150, 50, 30,0,2 * Math.PI)}
          {errors > 3 && ctx.moveTo(150,20);
            ctx.arc(150, 50, 30,0,2 * Math.PI)}
          //Legs
          {errors > 4 && ctx.moveTo(150,20);
            ctx.arc(150, 50, 30,0,2 * Math.PI)}
            {errors > 5 && ctx.moveTo(150,20);
              ctx.arc(150, 50, 30,0,2 * Math.PI)}
        
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
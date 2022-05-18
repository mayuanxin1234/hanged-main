import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Figure = props => {
  const { count } = useSelector((state) => state.counter)
  
    const errors = {count}
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
        {errors > 0 && ctx.moveTo(150,20);
        ctx.arc(150, 50, 30,0,2 * Math.PI)}
        //Body
        
      }

    useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(context)},[draw])
  return (    

    <canvas ref = {canvasRef} {...props}/>       
    
  )
}

export default Figure
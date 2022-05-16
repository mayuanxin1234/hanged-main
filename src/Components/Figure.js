import React, { useRef, useEffect } from 'react'

const Figure = props => {
    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.fillStyle = '#000000'
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
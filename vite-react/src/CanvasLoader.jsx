import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
  const { progress } = useProgress()

  return (
    <Html 
      as="div" 
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <span className="canvas-loader" style={{ fontSize: '30px' }}>
        Loading...
      </span>
      <progress value={progress} max={100} style={{ marginTop: '20px' }} />
      <p>{Math.round(progress)}%</p>
    </Html>
  )
}

export default CanvasLoader

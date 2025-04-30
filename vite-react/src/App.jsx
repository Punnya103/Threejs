import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import ChevroletGrooveModel from './ChevroletGrooveModel'
import CanvasLoader from './CanvasLoader'

const RotatingCube = () => {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>      
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <color attach="background" args={['#1e1e1e']} />
      <directionalLight position={[2, 2, 5]} intensity={1.5} />
      <OrbitControls enableZoom enablePan enableRotate />
      <Sparkles count={100} scale={5} size={2} speed={0.5} color="white" />

      <Suspense fallback={<CanvasLoader />}>
        <ChevroletGrooveModel />
      </Suspense>
    </Canvas>
  )
}

export default App

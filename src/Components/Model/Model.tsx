import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'

import './Model.scss';

function Scene() {
  const { scene } = useGLTF('/Portfolio/models/mac.glb')
  
  return (
    <Center>
      <primitive 
        object={scene} 
        scale={0.07}  
        rotation={[-Math.PI/2, 0, 0]}  
        position={[0, 0, 0]}  
      />
    </Center>
  )
}

export default function Model() {
    const [isInteracting, setIsInteracting] = useState(false)
  
    return (
      <div className='canvas__container' style={{ 
        cursor: isInteracting ? 'grabbing' : 'grab' 
      }}>
        <Canvas className='canvas'
          camera={{
            position: [0, 0.5, 5],
            fov: 50,
            near: 0.1,
            far: 1000
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
  
          <Scene />
  
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={5.5}
            minPolarAngle={Math.PI/6}
            maxPolarAngle={Math.PI/2.5}
            onStart={() => setIsInteracting(true)}  
            onEnd={() => setIsInteracting(false)}   
          />
  
        </Canvas>
      </div>
    )
  }
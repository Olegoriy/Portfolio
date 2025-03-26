import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'

function Scene() {
  const { scene } = useGLTF('/mac.glb')
  
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
      <div style={{ 
        width: '500px', 
        height: '500px',
        cursor: isInteracting ? 'grabbing' : 'grab' 
      }}>
        <Canvas
          camera={{
            position: [0, 0.5, 5],
            fov: 50,
            near: 0.1,
            far: 1000
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
  
          <Scene />
  
          <OrbitControls
            enableZoom={true}
            autoRotate
            autoRotateSpeed={5.5}
            minDistance={4}  
            maxDistance={8} 
            minPolarAngle={Math.PI/6}
            maxPolarAngle={Math.PI/2.5}
            onStart={() => setIsInteracting(true)}  
            onEnd={() => setIsInteracting(false)}   
          />
  
        </Canvas>
      </div>
    )
  }
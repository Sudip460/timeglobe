import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Sphere } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import PersonalityMarker from './PersonalityMarker'
import useGlobeStore from '../../stores/globeStore'

function Earth() {
  const earthTexture = useTexture('/earth-texture.jpg')
  
  return (
    <Sphere args={[2, 64, 64]}>
      <meshStandardMaterial 
        map={earthTexture} 
        roughness={0.8}
        metalness={0.1}
      />
    </Sphere>
  )
}

function EarthWithFallback() {
  return (
    <Sphere args={[2, 64, 64]}>
      <meshStandardMaterial 
        color="#4A90E2" 
        roughness={0.8}
        metalness={0.1}
      />
    </Sphere>
  )
}

export default function Globe() {
  const { personalities } = useGlobeStore()

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Earth */}
      <EarthWithFallback />
      
      {/* Stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0}
        fade
      />
      
      {/* Personality markers */}
      {personalities.map(person => (
        <PersonalityMarker key={person._id} personality={person} />
      ))}
      
      <OrbitControls 
        enableZoom={true}
        zoomSpeed={0.5}
        minDistance={3}
        maxDistance={8}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  )
}

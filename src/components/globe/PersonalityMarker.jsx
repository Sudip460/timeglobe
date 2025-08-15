import { Html, Sphere } from '@react-three/drei'
import { useState } from 'react'
import useGlobeStore from '../../stores/globeStore'

export default function PersonalityMarker({ personality }) {
  const [hovered, setHovered] = useState(false)
  const setSelectedPerson = useGlobeStore(state => state.setSelectedPerson)
  
  const position = latLngToVector3(personality.coordinates)
  
  return (
    <group position={[position.x, position.y, position.z]}>
      <Sphere
        args={[0.05, 16, 16]}
        onClick={() => setSelectedPerson(personality)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshBasicMaterial 
          color={hovered ? "#FFD700" : "#FFA500"} 
          transparent
          opacity={hovered ? 1 : 0.8}
        />
      </Sphere>
      
      {hovered && (
        <Html distanceFactor={10} position={[0, 0.1, 0]}>
          <div className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
            {personality.name}
          </div>
        </Html>
      )}
    </group>
  )
}

function latLngToVector3({ lat, lng }) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const radius = 2.05
  
  return {
    x: -radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta)
  }
}

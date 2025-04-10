"use client"

import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type * as THREE from "three"

export default function LoadingSpinner() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[1, 0.1, 16, 32]} />
        <meshStandardMaterial color="#ffffff" wireframe={true} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 16, 32]} />
        <meshStandardMaterial color="#ffffff" wireframe={true} />
      </mesh>
    </group>
  )
}

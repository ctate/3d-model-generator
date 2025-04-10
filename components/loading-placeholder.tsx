"use client"

export default function LoadingPlaceholder() {
  return (
    <>
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#cccccc" wireframe={true} transparent opacity={0.5} />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial color="#aaaaaa" wireframe={true} transparent opacity={0.5} />
      </mesh>
    </>
  )
}

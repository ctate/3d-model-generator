"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import SceneSetup from "./scene-setup"
import ModelComponent from "./model-component"
import LoadingPlaceholder from "./loading-placeholder"

export default function ModelViewer({ modelUrl }: { modelUrl: string | null }) {
  return (
    <div className="w-full h-[100dvh] bg-black bg-radial-gradient">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <SceneSetup />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={<LoadingPlaceholder />}>
          {modelUrl ? <ModelComponent url={modelUrl} /> : <LoadingPlaceholder />}
        </Suspense>

        <OrbitControls
          minDistance={3}
          maxDistance={10}
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
        />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

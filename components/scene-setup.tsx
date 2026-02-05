"use client"

import { useEffect } from "react"
import { useThree } from "@react-three/fiber"
import { Color } from "three"

export default function SceneSetup() {
  const { scene } = useThree()

  useEffect(() => {
    scene.background = new Color(0xff0000)
  }, [scene])

  return null
}

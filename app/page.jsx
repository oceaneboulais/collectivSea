'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ExperienceShort from './experience/ExperienceShort'
import { StrictMode } from 'react'


export default function Page() {
  return (
    <StrictMode>
      <Canvas shadows camera={{ position: [0, 13, 7], fov: 50 }} className={'canvas'} >
        <ExperienceShort />
      </Canvas>
    </StrictMode >

  )
}

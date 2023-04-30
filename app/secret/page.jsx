'use client'

import dynamic from 'next/dynamic'
import { CubeTransparentIcon, SpeakerWaveIcon, CpuChipIcon, SunIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Experience from '@/experience/Experience'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (

    <Canvas shadows camera={{ position: [0, 13, 7], fov: 50 }} className={'canvas'} >
      <Experience />
    </Canvas>
  )
}


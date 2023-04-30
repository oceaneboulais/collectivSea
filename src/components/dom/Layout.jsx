'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { NavBar } from '../nav/NavBar'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }) => {
  const ref = useRef()

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
      }}
    >
      <NavBar />

      {children}

      {/* <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: 'calc(100vh-4rem)',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      /> */}
    </div >
  )
}

export { Layout }

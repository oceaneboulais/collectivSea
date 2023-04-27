import { Suspense, useEffect, useMemo } from 'react'
import { PerspectiveCamera, OrbitControls, ScrollControls, Scroll, Sparkles, useVideoTexture, Float, Cylinder, Sphere, Html } from '@react-three/drei'
import CausticLight from './CausticLight'
import NearObjects from './NearObjects'
import FarObjects from './FarObjects'
import Sand from './Sand'
import SubAndMic from './SubAndMic'
import { useThree } from '@react-three/fiber'

export default function Experience() {
  const { viewport, camera } = useThree();
  return (
    <Suspense>
      <PerspectiveCamera makeDefault position={[0, 13, 7]} />
      <fog attach="fog" color={typeof backgroundColor != 'undefined' ? backgroundColor : "#0fa2ab"} near={-25} far={50} />
      <ambientLight intensity={.5} />
      {/* <OrbitControls maxPolarAngle = {Math.PI/2}/> */}
      <ScrollControls pages={1.8} damping={0.5}>

        <Scroll>
          <Sparkles
            position={[0, 10, 0]}
            count={2000}
            speed={0.1}
            opacity={0.8}
            size={1}
            scale={20}
          />
          {/**Caustic light seems to make page error out every 1/20 times */}
          <CausticLight />
          <NearObjects />

          <FarObjects />
          {/* <AboutTextFlex /> */}
          <Sand />
          <Html position={[0, 14, 1]} wrapperClass="w-full">
            <div
              style={{
                transform: 'translateX(-50vw)',
              }}
              className="text-white text-opacity-90 text-6xl w-3/5 mx-auto"
            >
              <span
                style={{
                  position: 'relative',
                  display: 'inline',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    zIndex: -1,
                    backgroundColor: '#facc15',
                    opacity: 0.9,
                    height: '106%', // Increase the height by 10%
                    width: '106%', // Increase the width by 10%
                    left: '-3%', // Offset the increased width by -5% (half of the width increase)
                    top: '-3%', // Offset the increased height by -5% (half of the height increase)

                    transform: 'rotate(-2deg)',
                  }}
                ></span>
                {"CollectivSea"}
              </span>
              {" is an immersive art collective reimagining science education through interactive experiences."}
            </div>
          </Html>
        </Scroll>

        <SubAndMic />

      </ScrollControls>

    </Suspense>
  )
}


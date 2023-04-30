import { Suspense, useEffect, useMemo } from 'react'
import { PerspectiveCamera, OrbitControls, ScrollControls, Scroll, Sparkles, useVideoTexture, Float, Cylinder, Sphere, Html } from '@react-three/drei'
import CausticLightShort from './CausticLightShort'
import NearObjects from './NearObjects'
import FarObjects from './FarObjects'
import Sand from './Sand'
import SubAndMic from './SubAndMic'
import { useThree } from '@react-three/fiber'
import Image from 'next/image'
import Model from './Model'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '/tailwind.config.js'
import { useMediaQuery } from '@react-hook/media-query'
import { ExperienceText } from './ExperienceText'



const fullConfig = resolveConfig(tailwindConfig)
const maxWidth = fullConfig.theme.screens.xl
const translateXValue = `calc(max-w-screen-xl / 2)`
// debugger
console.log(translateXValue)

export default function Experience() {
    const { viewport, camera } = useThree();
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return (
        <Suspense>
            <PerspectiveCamera makeDefault position={[0, 13, 7]} />
            <fog attach="fog" color={typeof backgroundColor != 'undefined' ? backgroundColor : "#0fa2ab"} near={-25} far={50} />
            <ambientLight intensity={.5} />
            {/* <OrbitControls maxPolarAngle = {Math.PI/2}/> */}

            <Sparkles
                position={[0, 10, 0]}
                count={2000}
                speed={0.1}
                opacity={0.8}
                size={1}
                scale={20}
            />
            {/**Caustic light seems to make page error out every 1/20 times */}
            <CausticLightShort />
            <FarObjects />
            <Sand />
            <Float>


                <Model
                    model="Water_Ship_001"
                    scale={1}
                    position={isDesktop ? [10, 15, -10] : [3, 15, -10]}
                />

            </Float>

            <Model
                model="Coralls_008"
                scale={1}
                position={isDesktop ? [-2.8, 5, -3] : [-0.3, 5. - 3]}
                rotation={[0, -3, 0]}
            />

            <Model
                model="Coral_026"
                scale={1}
                position={isDesktop ? [-4.9, 6.8, -1.3] : [-2.9, 6.8, -1.3]}
                rotation={[1, -3, 0]}
            />

            {/*Starfish*/}
            <Model
                model="Coral_005"
                scale={1}
                position={isDesktop ? [-6.7, 10.7, -2.5] : [-2.8, 10.7, -2.5]}
                rotation={isDesktop ? [1, 0, -1.6] : [1, 0, -1.2]}
            />

            <Model
                model="Rock_021"
                scale={1}
                position={isDesktop ? [-8, 8.5, -3.5] : [-4, 8.5, -3.5]}
                rotation={[0, -3, 0]}
            />
            <ExperienceText />
        </Suspense>
    )
}




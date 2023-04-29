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
import Jellyfish from './Jellyfish'



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

            {/* <Float rotationIntensity={0.5}>
                <Jellyfish
                    position={isDesktop ? [-2, 10.7, -0.5] : [-1, 10.7, -0.5]}
                />
            </Float> */}
            <Model
                model="Rock_021"
                scale={1}
                position={isDesktop ? [-8, 8.5, -3.5] : [-4, 8.5, -3.5]}
                rotation={[0, -3, 0]}
            />
            <Html position={[0, 14, 1]} wrapperClass="w-full" style={{ pointerEvents: "none" }}>
                <div
                    style={{
                        transform: `translateX(calc(-${maxWidth} / 2))`,
                    }}
                    className="text-white text-opacity-90 text-6xl  max-w-screen-xl mx-auto"
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
                    {" is an art collective creating a  playborhood for blue-minded artists, scientists, researchers & designers to share the story of our undiscovered blue planet."}

                </div>



            </Html>


        </Suspense>
    )
}

const Polypod = function () {
    return (
        <div className="">
            <div className="px-6 py-4 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Polypod
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
                        Our first interactive art experience.  Enter and become a coral polyp
                        and find yourself surrounded by coral-generating frequencies.

                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/polypod"
                            className="rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            style={{ pointerEvents: "auto" }}
                        >
                            Learn More <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


const people = [
    {
        name: 'Océane Boulais',
        role: 'Navigator',
        imageUrl:
            './crew/oceane.JPG',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Lorea Dandoy',
        role: 'First Mate',
        imageUrl:
            './crew/lorea.JPG',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'Niv Anidjar',
        role: 'Chief engineer',
        imageUrl:
            './crew/niv.JPG',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },
    {
        name: 'JP Whitaker',
        role: 'Stowaway',
        imageUrl:
            './crew/jp.JPG',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: '#',
        linkedinUrl: '#',
    },

]
const Crew = function () {
    return (
        <div className="py-2 sm:py-2 flex justify-center">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col items-end"> {/* Add a wrapper div */}
                    <ul
                        role="list"
                        className="mx-auto grid max-w-xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-4 md:grid-cols-4 lg:mx-0 lg:max-w-xl lg:grid-cols-5 xl:grid-cols-4"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <img className="mx-auto h-24 w-24 object-cover rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/crew"
                        className="mt-6 rounded-md bg-amber-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        style={{ pointerEvents: "auto" }}
                    >
                        Meet the crew <span aria-hidden="true">→</span>
                    </a>
                </div> {/* Close the wrapper div */}
            </div>
        </div>
    )
}


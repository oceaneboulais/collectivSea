'use client'

import dynamic from 'next/dynamic'
import { CubeTransparentIcon, SpeakerWaveIcon, CpuChipIcon, SunIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'



export default function Page() {
  return (
    <>

      <div className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">


          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="bg-white px-8 py-6 rounded-2xl">
                <div className="lg:pr-4 ">
                  <div className="lg:max-w-lg bg-white mb-6 rounded">
                    {/* <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> */}
                    <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Polyp Pod</h1>
                    <p className="mt-6 text-xl leading-8 text-gray-900">
                      Enter and become a coral polyp
                      and find yourself surrounded by coral-generating frequencies.
                    </p>
                  </div>
                </div>
                <div className="max-w-xl text-base leading-7 text-gray-900 lg:max-w-lg">

                  <p>
                    Acoustic enrichment of reef ecosystems is a way to stimulate and accelerate
                    reef growth and recovery by attracting coral polyp larvae and coral gardeners (e.g. herbivorous reef fish). Coral polyps are tiny, soft-bodied organisms, much like humans, literally orienting
                    and grounding themselves towards vibrational sequences of thriving reef soundscapes composed of snapping shrimp and reef fish chorus. In a world where noise pollution is ubiquitous, Polyp Pod offers a fortress of solitude. Enter and become the Polyp, and find yourself surrounded by coral-generating frequencies collected from Kaneohe Bay, O’ahu that hold space for rest, reflection and reconnection with one’s generative inner child.

                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <CubeTransparentIcon className="mt-1 h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Robust standalone shell</strong>
                        <ul>
                          <li>CNC-milled timber panels + timber ring beams for structural support.</li>
                          <li>Rice coral (manopora capitata) 3D model</li>
                          <li>Painted to look like abstract coral polyp (external)</li>
                          <li>Aluminum-foil tape for insulation (external/internal)</li>
                          <li>Sound absorbing canvas material (internal)</li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <SpeakerWaveIcon className="mt-1 h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Sound</strong>
                        <ul>
                          <li> (3) Speakers</li>
                          <li> Surround sound interpretation of
                            RGB channels from spectrogram</li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <SunIcon className="mt-1 h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Interior Inspiration</strong>
                        <ul>

                          <li> Bioluminescent activation mimicking coral polyp spawning from 8:45pm- 9:15pm</li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <CpuChipIcon className="mt-1 h-5 w-5 flex-none text-gray-900" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-gray-900">Microcontroller</strong>
                        <ul>
                          <li> Reef soundscapes (sample)</li>
                          <li>Mixed/produced into an ambient
                            noise track</li>
                          <li>Off-grid capability</li>
                          <li>Battery</li>
                          <li>Solar panel</li>
                          <li>Generator (backup)</li>
                        </ul>
                      </span>
                    </li>

                  </ul>
                  <Image
                    className="mx-auto mt-8 mb-2 h-96 w-full flex-none rounded-xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                    priority
                    src="/polypod/polypod-external.jpeg"
                    alt=""
                    width={2048}
                    height={2732}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:-ml-12 lg:-mt-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl   ring-1 ring-gray-400/10 sm:w-full lg:w-[57rem]"
              src="./polypod/diagram-white-cropped.png"
              alt=""
            />

          </div>


        </div>
      </div >
    </>
  )
}


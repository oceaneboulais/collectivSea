'use client'

import dynamic from 'next/dynamic'
import { CubeTransparentIcon, SpeakerWaveIcon, CpuChipIcon, SunIcon } from '@heroicons/react/20/solid'



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
                    <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Polypod</h1>
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
                    and grounding themselves towards vibrational sequences of thriving reef soundscapes composed of snapping shrimp and reef fish chorus. In a world where noise pollution is ubiquitous, PolypPod offers a fortress of solitude. Enter and become the Polyp, and find yourself surrounded by coral-generating frequencies collected from Kaneohe Bay, O’ahu that hold space for rest, reflection and reconnection with one’s generative inner child.

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
                  <img
                    className="mx-auto mt-8 mb-2 h-96 w-full flex-none rounded-xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"

                    src="./polypod/polypod-external.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl   ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="./polypod/diagram-white.png"
              alt=""
            />

          </div>


        </div>
      </div >
    </>
  )
}


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      './polypod/polypod-external.jpeg',
  },
  // More files...
]

const Gallery = function () {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <div className="mx-auto max-w-3xl">
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
              <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


import { CheckCircleIcon } from '@heroicons/react/20/solid'

const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

const Cta = function () {
  return (
    <div className="">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="./polypod/polypod-external.jpeg"
              alt=""
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Polypod v0</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Inspired by Rice Coral, Polypod v0 will be constructed with CNC-milled wood panels covered in acoustic fabric.
              </p>
              {/* <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          /> */}
        {/* </div> */}
      </div>
    </div >
  )
}

'use client'

import dynamic from 'next/dynamic'
import { CubeTransparentIcon, SpeakerWaveIcon, CpuChipIcon, SunIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const posts = [
  {
    id: 4,
    title: 'Homing in on the Final Design',
    href: '#',
    description:
      <>
        We are narrowing in on the final form of the Polyp Pod.  The panels will be constructed out of CNC cut 4x8 plywood.

        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-7.png"
          alt=""
        />
      </>
    ,
    date: 'June 2023',
    datetime: '2023-06-13',
    category: { title: 'Structure', href: '#' },
  },
  {
    id: 4,
    title: 'Design Coming Together',
    href: '#',
    description:
      <>
        Catherine and George made progress on how the structure can be fabricated, assembled, and what materials we&apos;ll be using.


        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-1.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-2.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-3.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-4.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-5.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/structure-6.jpeg"
          alt=""
        />
      </>
    ,
    date: 'May 2023',
    datetime: '2023-05-13',
    category: { title: 'Structure', href: '#' },
  },
  {
    id: 3,
    title: 'Maker Space Visit',
    href: '#',
    description:
      <>
        With Catherine at the Makerspace. tldr; looking into mixed material approach with aluminum base, wood for side fins. Need more research on how structures are built in parades/theater. Maybe dense foam for the fins?
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/maker-space-1.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/maker-space-2.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/maker-space-3.jpg"
          alt=""
        />
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/maker-space-4.jpg"
          alt=""
        />
      </>
    ,
    date: 'May 2023',
    datetime: '2023-05-13',
    category: { title: 'Structure', href: '#' },
  },
  {
    id: 2,
    title: 'Audio Experience',
    href: '#',
    description:
      <>
        Audio brainstorm re: acoustic installation with Océane, Niv & Gabe (our Birch Aquarium facilitator/collaborator).

        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/audio-brainstorm.jpg"
          alt=""
        />
      </>
    ,
    date: 'May 2023',
    datetime: '2023-05-13',
    category: { title: 'Audio', href: '#' },
  },
  {
    id: 1,
    title: '3D Print of Structure',
    href: '#',
    description:
      <>
        Jason He 3D printed our first example of the Poly Pod structure, for use in demos and pitches.
        <img
          className="w-full  rounded-xl mt-12"
          src="./updates/print.png"
          alt=""
        />
      </>
    ,
    date: 'May 2023',
    datetime: '2023-05-05',
    category: { title: 'Structure', href: '#' },
  },
]


export default function Page() {
  return (

    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ship&apos;s Log</h2>
          <p className="mt-2 text-lg leading-8 text-slate-800">
            Updates from the team.
          </p>
          <div className="mt-8 space-y-16   sm:mt-16 ">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-white">
                    {post.date}
                  </time>
                  <div
                    href={post.category.href}
                    className="relative z-10 rounded-full  px-3 py-1.5 font-medium text-yellow-400 "
                  >
                    {post.category.title}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-800 ">
                    <div>
                      <span className="absolute inset-0" />
                      {post.title}
                    </div>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-md leading-6 text-slate-800">{post.description}</p>
                </div>

              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

}


'use client'

import dynamic from 'next/dynamic'
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'



const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$24',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$32',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$48',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]
const footerNavigation = {
  solutions: [
    { name: 'Hosting', href: '#' },
    { name: 'Data Services', href: '#' },
    { name: 'Uptime Monitoring', href: '#' },
    { name: 'Enterprise Services', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Reference', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Page() {
  return (
    <div className="">

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            {/* <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffffff] to-[#ffffff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            /> */}
          </div>
          <div className="py-40 sm:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto  text-center">
                <ExperienceText />
              </div>
              <div className="mt-16 flow-root sm:mt-40">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="./polypod/kickstarter.jpg"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>



              <div className="mx-auto  text-center mt-16 ">

                <p className="text-2xl sm:text-4xl text-white font-light	">
                  Our first project the &quot;Polyp Pod&quot;, an immersive, interactive sci-art exhibit invites explorers to walk inside and become a coral polyp within a dynamic reef ecosystem
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://www.kickstarter.com/projects/collectivsea/the-coral-polyp-pod"
                    className="rounded-md bg-amber-400 px-5 py-4 text-lg font-semibold text-slate-800 shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Learn more on Kickstarter <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            {/* <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ffffff] to-[#ffffff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            /> */}
          </div>
        </div>









      </main>

    </div>
  )
}



import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "tailwind.config"
import { useMediaQuery } from "@react-hook/media-query"
const fullConfig = resolveConfig(tailwindConfig)


export const ExperienceText = function () {

  return (
    <div

      className="text-white text-opacity-90 text-4xl  sm:text-6xl  mx-auto"
    >

      <span
        style={{
          position: 'relative',
          display: 'inline',
        }}
      >
        <Highlight />
        {"CollectivSea"}
      </span>
      {" is an immersive SciArt education 501c3 nonprofit organization fueling curiousity world wide and collectiv of thalassophilic scientists, artists, researchers and designers massively stoked to share the story of our undiscovered blue planet."}


    </div>

  )
}


const Highlight = function () {
  return (
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
  )
}

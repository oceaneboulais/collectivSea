"use client"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';


const navigation = [
  { name: 'Polypod', href: '/polyppod', current: true },
  { name: 'Crew', href: '/crew', current: false },
  { name: 'Mission', href: '/mission', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const inlineStyles = {
  zIndex: 1,
  // // WebkitBackdropFilter: 'blur(10px) saturate(160%) contrast(45%) brightness(120%)',
  // backdropFilter: 'blur(2px) saturate(100%) contrast(100%) brightness(100%)',
  // // backgroundColor: 'rgba(255, 255, 255, 0.2)',

  // transition: 'all 0.5s ease-in-out',
};

export function NavBar() {
  return (
    <Disclosure as="nav" className="clear">
      {({ open }) => (
        <>
          <div
            className="fixed z-1 w-full mx-auto px-2 sm:px-6 lg:px-8"
            style={inlineStyles}
          >
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className='text-white text-md font-medium'><Link href="/">CollectivSea</Link></span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href}
                        key={item.href}
                        className={classNames(
                          'text-gray-300  hover:text-white hover:cursor-pointer',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>

                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
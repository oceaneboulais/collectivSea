"use client"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { Fragment } from 'react'
import { usePathname } from 'next/navigation';



const navigation = [
  { name: 'Polyp Pod', href: '/polyppod', current: true },
  { name: 'Crew', href: '/crew', current: false },
  { name: 'Mission', href: '/mission', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function NavBar() {
  const pathName = usePathname()

  return (
    <Disclosure as="nav" className="z-[999] absolute w-full">
      {({ open }) => (
        <>
          <div className="mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className='text-white text-md font-medium'><Link href="/">CollectivSea</Link></span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href}
                        key={item.href}
                        className={
                          classNames((item.href == pathName) ? 'text-white' : 'text-gray-300', 'hover:text-white hover:cursor-pointer rounded-md px-3 py-2 text-sm font-medium')
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>

                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">


                  {/* Profile dropdown */}

                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset hover:ring-white hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 drop-shadow-lg bg-transparent	">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    (item.href == pathName) ? 'bg-amber-400 text-white' : 'text-gray-900 bg-white hover:bg-gray-700 hover:text-white',
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


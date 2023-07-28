
"use client"

import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo4.svg';
import Link from 'next/link';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, XMarkIcon} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { LiaShoppingBagSolid} from 'react-icons/lia'
import { LiaSearchSolid } from 'react-icons/lia';
import styled from 'styled-components';
//import { useRouter } from "next/navigation";


const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <header  className="bg-[] relative backdrop-blur-sm  w-full top-0 left-0 z-20">
    <div className="mx-auto flex max-w-7xl items-center justify-between  p-4 md:p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link href="/" className=" p-1.5">
         <Image src={Logo} className='h-6 w-auto md:h-[1.7rem] log'  alt='logo' />
        </Link>
      </div>

      <div className="flex  lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-7 w-7 text-white" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden  lg:flex lg:gap-x-10 ">
        <Popover className="relative  order-3">
          <Popover.Button className=" text-[17px] font-sand font-[500] flex hover:text-black  items-center gap-x-1 leading-6 text-black  ">
            Shop
            <ChevronDownIcon className="h-5 w-5 flex-none text-black" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <Link href="/about" className="  text-[17px] font-sand font-[500] order-1 hover:text-black leading-6  text-black">
          About
        </Link>
      
        <Link href="/portfolio" className="  text-[17px] font-sand font-[500] order-4 hover:text-black leading-6 text-black ">
         Portfolio
        </Link>
        <Link href="/blog" className="  text-[17px] font-sand font-[500] order-5 hover:text-black leading-6 text-black">
         Blog
        </Link>
       
        <Link href="/contact" className="  text-[17px] font-sand font-[500]  order-7  leading-6 hover:text-black text-black">
        Contact Us
        </Link>
       
      </Popover.Group>
     

      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
        <Link href="/cart" className=" text-[17px] font-sand font-[400]  leading-6 hover:text-black text-gray-900">
          <LiaShoppingBagSolid className='h-7 w-7 text-black'/> 
        </Link>
        <Link href="/" className=" text-[17px] font-sand font-[400] leading-6 hover:text-black text-gray-900">
          <LiaSearchSolid className='h-7 w-7 text-black'/> 
        </Link>
      </div>
    </div>
  
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
        <Link href="/" className=" p-1.5">
         <Image src={Logo} className='h-8 w-auto md:h-10  '  alt='logo' />
        </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-7 w-7 text-black" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root  ">
          <div className="-my-6 divide-y divide-gray-500/10">

             

            <div className="space-y-2 py-6  ">
            
              <Link href="/about" className="-mx-3  font-sand font-[500] order-1 block rounded-lg px-3 py-2 text-[18px]  leading-7 text-black hover:bg-gray-50">
               About 
              </Link>
            
              <Disclosure as="div" className="-mx-3 order-3 ">
                {({ open }) => (
                  <Link href='/shop' className=''>
                    <Disclosure.Button className="flex order-3 w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5  leading-7 font-[500] font-sand text-[18px]  text-black hover:bg-gray-50">
                       Shop
                      <ChevronDownIcon
                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </Link>
                )}
              </Disclosure>
              <Link href="/portfolio" className="-mx-3 order-4 block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50" >
               Portfolio 
              </Link>
              <Link href="/blog" className="-mx-3 order-5 block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50">
               Blog
              </Link>
             
              <Link href="/contact" className="-mx-3 order-7 block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50">
              Contact
              </Link>
            </div>
            <div className="py-6">
              <Link href="/cart" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
               Check Cart
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
  )
}




export default Navbar;


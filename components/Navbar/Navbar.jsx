
"use client"

import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo4.svg';
import Link from 'next/link';
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { LiaShoppingBagSolid} from 'react-icons/lia'
import { LiaSearchSolid } from 'react-icons/lia';


const Navbar = () => {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <header className="bg-white ">
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
      <Link href="/" className=" p-1.5">
         <Image src={Logo} className='h-6 w-auto md:h-[1.7rem] log'  alt='logo' />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-10">

  
 
       <Link href="/about" className="  text-[17px] font-sand font-[500] order-1 hover:text-black leading-6  text-black">
          About
        </Link>
        <Link href="/services" className="  text-[17px] font-sand font-[500] order-1 hover:text-black leading-6  text-black">
          Services
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

      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
      <Link href="/cart" className=" text-[17px] font-sand font-[400]  leading-6 hover:text-black text-gray-900">
          <LiaShoppingBagSolid className='h-7 w-7 text-black'/> 
        </Link>
        <Link href="/" className=" text-[17px] font-sand font-[400] leading-6 hover:text-black text-gray-900">
          <LiaSearchSolid className='h-7 w-7 text-black'/> 
        </Link>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
        <Link href="/" className=" p-1.5">
         <Image src={Logo} className='h-6 w-auto  '  alt='logo' />
        </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-8 w-8 text-black" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
            
           
              <Link href="/about" className="-mx-3  block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50" >
               About
              </Link>
              <Link href="/services" className="-mx-3  block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50" >
               Services
              </Link>
              <Link href="/portfolio" className="-mx-3  block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50" >
               Portfolio 
              </Link>
              <Link href="/blog" className="-mx-3  block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50">
               Blog
              </Link>
             
              <Link href="/contact" className="-mx-3  block rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50">
              Contact
              </Link>
            </div>
            <div className="py-6 flex gap-5">
            <Link href="/cart" className="-mx-3 flex gap-3 rounded-lg px-3 py-2  text-[18px] font-sand font-[500] leading-7 text-black hover:bg-gray-50 ">
             Check Cart <LiaShoppingBagSolid className='h-7 w-7 text-black'/> 
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



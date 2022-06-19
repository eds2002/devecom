import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon, TrashIcon } from '@heroicons/react/outline'
import { Menu, Popover, Transition,Dialog, Tab } from '@headlessui/react'
import { Fragment, useState, useEffect, useContext } from 'react'
import {Announcement, Cart, Shopnav} from '../'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/BulaLogoWhite.svg'

const navigation = {
    pages: [
      { name: 'Bula Mic', href: '/bulamic' },
    //   { name: 'Our Story', href: '/story' },
      { name: 'Support', href: '/bula/support' },
    ],
    resources: [
        {name: 'FAQs', href: '/bula/support'},
        {name: 'Returns & Exchanges', href: '/bula/support'},
        {name: 'help@bula.com', href: '/bula/support'},
    ]
}

  
const Navigation = ({active, shopNav,test}) => {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
        if(window.scrollY > 690){
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false); 
            } else { // if scroll up show the navbar
                setShow(true);  
            }
        }else{
            setShow(true);  
        }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div className={`fixed z-20 w-full shadow-xl bg-black ${show ? 'translate-y-[0%]' : 'translate-y-[-100%]'} transition duration-300`}>
        <Announcement/>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div>
                <div className="flex items-center justify-between h-16">
                    {/* Hamburger */}
                    <div className = "block cursor-pointer md:hidden" onClick = {()=>setOpen(!open)}>
                        <MenuIcon
                            className="flex-shrink-0 w-6 h-6 text-white group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                    </div>

                    {/* Logo (lg+) */}
                    <div className="z-50 flex-1 w-full h-full md:flex md:items-center">
                        <div className = "relative flex items-center justify-center w-full h-full select-none md:justify-start">
                            <Link href = "/">
                                <Image src = {logo} width = {100} height = {50} priority className = "cursor-pointer" alt = "The official Bula Mic logo. A company dedicated to selling quality microphones."/>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className = " md:flex md:gap-x-10 md:text-xs md:items-center">

                        {/* Links */}
                        {navigation.pages.map((page,id) => (
                            <Link href = {page.href ?? ''} key = {id}>
                                <a className = "hidden text-white md:block hover:text-indigo-600">{page.name}</a>
                            </Link>
                        ))}


                        {/* Cart */}
                        <Cart/>
                    </nav>
                </div>
            </div>
        </div>
        {shopNav === 'true' && 
            /* TODO, display only on more info page 'bulamic.com/bulamic' endpoint */
            (
            <Shopnav/>
            )
        }

    
    {/* Mobile menu */}
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
            <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
            >
            <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-[#16161a] shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                        onClick={() => setOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Links */}
                <div className="px-4 py-6 space-y-6">
                    {navigation.pages.map((page,id) => (
                        <div key={id} className="flow-root border-b-[1px] border-gray-700 pb-5">
                            <Link href = {page.href ?? ''}>
                                <a className="block p-2 -m-2 text-2xl font-medium text-white">
                                    {page.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className = "px-4">
                    {navigation.resources.map((resource,id) => (
                        <div key={id} className="flow-root">
                            <Link href = {resource.href ?? ''}>
                                <a className="block p-2 -m-2 text-sm font-medium text-[#72757e]">
                                    {resource.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </Dialog.Panel>
            </Transition.Child>
        </div>
        </Dialog>
    </Transition.Root>
    </div>
  )
}

export default Navigation
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Menu, Popover, Transition,Dialog, Tab } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import {Announcement, Shopnav} from '../'
import Link from 'next/link'
const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

const navigation = {
    pages: [
      { name: 'Cubed', href: '/cubed' },
      { name: 'Our Story', href: '/story' },
      { name: 'Support', href: '/support' },
    ],
    resources: [
        {name: 'FAQs', href: '/faq'},
        {name: 'Returns & Exchanges', href: '/support/returns-&-exchanges'},
        {name: 'support@domain.com', href: '/support/email'},
    ]
}

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}
  
  

const Navigation = ({active, shopNav}) => {
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
    <div className={`fixed z-20 w-full shadow-xl bg-[#16161a] ${show ? 'translate-y-[0%]' : 'translate-y-[-100%]'} transition duration-300`}>
        {/* <Announcement/> */}
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
                    <div className="flex-1 text-center md:flex md:items-center">
                        <Link href = "/">
                            <a>
                                <span className="text-lg font-bold text-white">Logo</span>
                            </a>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className = " md:flex md:gap-x-10 md:text-sm md:items-center">

                        {/* Links */}
                        {navigation.pages.map((page,id) => (
                            <Link href = {page.href ?? ''} key = {id}>
                                <a className = "hidden font-medium text-white md:block hover:text-indigo-600">{page.name}</a>
                            </Link>
                        ))}


                        {/* Cart */}
                        <div className = "flex z-[999] lg:relative items-center justify-center">
                            <Popover className="flow-root text-sm lg:ml-8">
                                <Popover.Button className="flex items-center p-2 -m-2 group">
                                    <ShoppingBagIcon
                                        className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    {/* <span className="w-5 h-5 text-sm font-medium text-white bg-gray-500 rounded-full group-hover:text-white">0</span> */}
                                    <span className="sr-only">items in cart, view bag</span>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Panel className="absolute top-24 lg:top-8 inset-x-0 mt-px pb-6 bg-[#242629] shadow-lg sm:px-2  lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-10">
                                        <h2 className="sr-only">Shopping Cart</h2>

                                        <form className="max-w-2xl px-4 mx-auto">
                                        <ul role="list" className="divide-y divide-gray-700">
                                            {products.map((product) => (
                                            <li key={product.id} className="flex items-center py-6">
                                                <img
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                className="flex-none w-16 h-16 border border-gray-200 rounded-md"
                                                />
                                                <div className="flex-auto ml-4">
                                                <h3 className="font-medium text-white">
                                                    <Link href = "product.href">
                                                        <a>{product.name}</a>
                                                    </Link>
                                                </h3>
                                                <p className="text-[#94a1b2]">{product.color}</p>
                                                </div>
                                            </li>
                                            ))}
                                        </ul>

                                        <button
                                            type="submit"
                                            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                                        >
                                            Checkout
                                        </button>
                                        </form>
                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                            <button type = "button" className = "hidden md:py-[4px] md:bg-gray-900 md:px-[15px] md:rounded-full md:text-white">Shop now</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        {shopNav === 'true' && (<Shopnav/>)}

    
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
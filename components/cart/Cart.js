import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon, TrashIcon } from '@heroicons/react/outline'
import { Menu, Popover, Transition,Dialog, Tab } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import empty from '../../assets/notFound.svg'
import { viewCart } from '../../utils/getCart'
import { updateCart } from '../../utils/updateCart'
import { useRouter } from 'next/router'


export async function getStaticProps(){
    const cart = 'get'
    return{
        props:{
            cart:cart
        }
    }
}

const products = [
    {
      id: 1,
      name: 'Bula Mic',
      href: '#',
      cable: 'Lightning Cable',
      price:26.99,
      quantity:10,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
]

const subTotal = [{
    subTotal:23
}]

const Cart = ({cart}) => {
    const router = useRouter();
    const [userCart, setUserCart] = useState([])
    const [bag, setCurrentBag] = useState()
    useEffect(()=>{
        (async ()=>{
            // TODO Check if cart exists, if it does not create a cart
            const cartExists = window.localStorage.getItem('bula-cart')
            if(!cartExists){
              // TODO Doesn't exist then create a cart for the user, store cart in localstorage
              const {data} = await storefront(createCart)
              const cart = [
                {id:data.cartCreate.cart.id},
                {url:data.cartCreate.cart.checkoutUrl}
              ]
              window.localStorage.setItem('bula-cart', JSON.stringify(cart))
            }else{
              // TODO A cart exists, modify current cart 
              const cart = JSON.parse(window.localStorage.getItem('bula-cart'))
              const data = await viewCart(cart[0].id)
              setUserCart(data?.cart)
            }
          })();
      },[])

      const itemsInCart = userCart.lines?.edges
      console.log(userCart)


      const handleCheckout = (checkoutLink) =>{
        //TODO push user to checkout page
        router.push(checkoutLink)
      }

      const handleQtyChange = async (quantity, lineId) =>{
        //TODO get the new quantity, +1 or -1, and get the line id to update cart
        const cartId = JSON.parse(localStorage.getItem('bula-cart'))

        // TODO, get the new cart data and update set to rerender
        const {cart} = await updateCart(cartId[0].id, lineId, quantity)
        setUserCart(cart)
      }

  return (
    <div className = "flex z-[999] lg:relative items-center justify-center">
        <Popover className="flow-root text-sm lg:ml-8">
            <Popover.Button className="flex items-center p-2 -m-2 group">
                {itemsInCart?.length > 0 ? 
                <div className = "flex items-center justify-center w-6 h-6 text-xs text-white bg-indigo-600 rounded-full">
                    {itemsInCart.length}
                </div>
                :
                <ShoppingBagIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400 outline-none group-hover:text-indigo-600"
                    aria-hidden="true"
                />
                }
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
                <Popover.Panel className="absolute top-24 lg:top-8 inset-x-0 mt-px pb-6 bg-[#242629] shadow-lg sm:px-2  lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg">
                    <h2 className="sr-only">Shopping Cart</h2>

                    <form className="max-w-2xl px-4 mx-auto divide-y divide-gray-700" onSubmit={(e)=>e.preventDefault()}>
                        {/* TODO Check if cart length is 0 */}
                        {itemsInCart?.length === 0 ? 
                            <div className = "h-full">
                                <div className = "flex items-center justify-between h-full gap-x-6 lg:flex-col">
                                    <div className = "flex items-center justify-center h-full mt-10">
                                        <div className = "w-[200px] h-[200px]">
                                            <Image src = {empty}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className= "flex flex-col text-white">
                                            <span className = "text-xl font-bold text-center lg:text-2xl">It's lonely in here.</span>
                                            <span className = "mb-2 text-sm text-center text-gray-400">Let's help you shop the greatest and latest.</span>
                                        </h1>
                                        <Link href = "/product/bula-mic">
                                            <button className = "w-full py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg">Go Shopping</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        :
                        <>
                            <ul role="list" className="divide-y divide-gray-700">
                                {itemsInCart?.map((item,index) => (
                                <li key={index} className="flex items-center py-6">
                                    <div className = "relative h-full">
                                        <img
                                        src={item.node.merchandise.image.url}
                                        // alt={product.imageAlt}
                                        className="flex-none w-16 h-16 border border-black rounded-md"
                                        />
                                        <p className = "absolute top-[-5px] right-[-5px] flex items-center justify-center w-5 h-5 text-xs text-white bg-gray-600 rounded-full">{item.node.quantity}</p>
                                    </div>
                                    <div className="flex flex-col h-16 ml-4">
                                        <h3 className="font-medium text-white">
                                            <Link href = "product.href">
                                                <a>Bula Mic</a>
                                            </Link>
                                        </h3>
                                        <p className="text-[#94a1b2] text-xs ">{item.node.merchandise.title}</p>
                                        <div className = "relative h-full my-auto">
                                            <div className = "flex flex-row items-center justify-between text-white bg-[#1b1c1f] rounded-lg w-16 text-sm absolute bottom-0">
                                                <button className = "flex items-center justify-center h-full px-1 transition rounded-tl-lg rounded-bl-lg hover:bg-indigo-600" 
                                                onClick = {()=>handleQtyChange(item.node.quantity - 1, item.node.id)}>-</button>
                                                <p className = "h-full px-2 text-xs cursor-default">{item.node.quantity}</p>
                                                <button className = "flex items-center justify-center h-full px-1 transition rounded-tr-lg rounded-br-lg hover:bg-indigo-600"
                                                onClick = {()=>handleQtyChange(item.node.quantity + 1, item.node.id)}
                                                >+</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "flex flex-col items-end justify-between flex-auto h-16">
                                        <h3 className = "font-medium text-white">
                                            {(JSON.parse(item.node.merchandise.priceV2.amount)).toLocaleString('en-US', {
                                                style:'currency',
                                                currency: 'USD',
                                            })}
                                        </h3>
                                        <TrashIcon className = "w-4 h-4 text-white transition cursor-pointer hover:text-indigo-600"/>
                                    </div>
                                </li>
                                ))}
                            </ul>
                            <ul role = "list" className = "flex flex-col py-6 gap-y-3">
                            <div className = "flex items-center justify-between">
                                <p className = "text-[#94a1b2] text-sm">Subtotal</p>
                                <p className = "text-sm text-white"> 
                                    {userCart.length != 0 && ((JSON.parse(userCart?.estimatedCost?.subtotalAmount?.amount)).toLocaleString('en-US', {
                                        style:'currency',
                                        currency: 'USD',
                                    }))}
                                </p>
                            </div>
                            <div className = "flex items-center justify-between">
                                <p className = "text-[#94a1b2] text-sm">Shipping</p>
                                <p className = "text-sm text-white">Free</p>
                            </div>
                            </ul>
                            <ul role = "list" className = "flex flex-col py-6 gap-y-3">
                            <div className = "flex items-center justify-between">
                                <p className = "text-[#94a1b2] text-sm">Total</p>
                                <p className = "flex items-center justify-center text-white gap-x-2">
                                    <span className = "text-xs text-gray-600">{userCart?.estimatedCost?.totalAmount?.currencyCode}</span>
                                    <span className = "text-lg ">
                                        {userCart.length != 0 && ((JSON.parse(userCart?.estimatedCost?.totalAmount?.amount)).toLocaleString('en-US', {
                                            style:'currency',
                                            currency: 'USD',
                                        }))}
                                    </span>
                                </p>
                            </div>
                            </ul>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-sm text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none ring-offset-2 focus:ring-indigo-600 focus:ring-2"
                                onClick = {()=>handleCheckout(userCart?.checkoutUrl)}
                            >
                                Checkout
                            </button>
                        </>
                        }
                    </form>
                </Popover.Panel>
            </Transition>
        </Popover>
        <button type = "button" className = "hidden md:py-[4px] md:bg-gray-900 md:px-[15px] md:rounded-full md:text-white">Shop now</button>
    </div>
  )
}

export default Cart
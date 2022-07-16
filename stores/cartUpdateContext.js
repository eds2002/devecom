import {createContext, useState,useEffect} from 'react'
import { viewCart } from '../utils/getCart'
import { storefront } from '../utils'
import { daysPassed } from '../utils/daysPassed'
import { createShopifyCart } from '../utils/createCart'

export const UpdateCartContext = createContext({
    status: null,
    update: () => {}
})

export const UpdateCartProvider = ({ children }) => {
    const [userCart, setUserCart] = useState([])
    const [openCart, setOpenCart] = useState(false)


    // TODO, on page load, load the users cart.
    useEffect(()=>{
        (async ()=>{
            // TODO Check if cart exists, if it does not create a cart
            const cartExists = window.localStorage.getItem('bula-cart')
            if(!cartExists){
                // TODO Doesn't exist then create a cart for the user, store cart in localstorage.
                createShopifyCart()
            }else{
                // TODO, get cart information
                const cart = JSON.parse(window.localStorage.getItem('bula-cart'))
                const data = await viewCart(cart[0].id)
                // TODO, if data returns a falsey statement (Issue with shopify? Cart id expires after 3-4 days instead of 10) 
                if(!data.cart){
                    // TODO, clear cart data from localstorage and create a new cart session
                    localStorage.clear('bula-cart')
                    createShopifyCart()
                    const cart = JSON.parse(window.localStorage.getItem('bula-cart'))
                    const data = await viewCart(cart[0].id)

                    // TODO, display cart 
                    setUserCart(data.cart)
                    return
                }
                // TODO, display the cart
                setUserCart(data.cart)
            }
        })();
    },[])

    const context = {userCart, setUserCart, openCart, setOpenCart}

    return (
        <UpdateCartContext.Provider value = {context}>
            { children }
        </UpdateCartContext.Provider>
    )
}

const gql = String.raw

const createCart = gql`
mutation CreateCart {
	cartCreate{
    cart{
      checkoutUrl
      id
		}
	}
}
`
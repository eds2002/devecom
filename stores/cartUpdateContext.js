import {createContext, useState,useEffect} from 'react'
import { viewCart } from '../utils/getCart'
import { storefront } from '../utils'

export const UpdateCartContext = createContext({
    status: null,
    update: () => {}
})

export const UpdateCartProvider = ({ children }) => {
    const [userCart, setUserCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
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
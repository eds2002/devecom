import {Faq, Footer, Navigation,ProductOverview, ProductSpecs, Reviews} from '../../components'
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { storefront } from '../../utils';
import { viewCart } from '../../utils/getCart';

const ProductPage = ({product, cartId, checkoutURL}) => {
  const [cart, setCart] = useState({})
  const [userCart, setUserCart] = useState({})
  // TODO Set information necessary for page to load.
  const variants = product.variants?.edges
  const images = product.images.edges 
  const title = product.title 
  const desc = product.description 
  const price = product.priceRange.minVariantPrice.amount 

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






  const [lastScrollY, setLastScrollY] = useState(0);
  const [popup, setPopup] = useState(false)
  
  const controlPopup = () => {
    if (typeof window !== 'undefined') { 
        if(window.scrollY > 690){ //Scroll must be greater than hero sections view height
            setPopup(true)
        }else{
            setPopup(false);  
        }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlPopup);
  //     // cleanup function
  //     return () => {
  //       window.removeEventListener('scroll', controlPopup);
  //     };
  //   }
  // }, [lastScrollY]);
  return (
    <main className = "relative bg-[#16161a]">
        <Navigation/>
        <ProductOverview images = {images} title = {title} description = {desc} price = {price} variants = {variants}/>
        <ProductSpecs/>
        <Faq/>
        <Reviews/>
        <AnimatePresence>
          {popup && (
            <motion.div 
              className = "fixed top-0 right-0 bottom-0 z-[99999999999] flex items-end justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Link href = "#">
                <a className = "absolute flex items-center justify-center w-32 mb-6 mr-6 text-white bg-indigo-600 shadow-xl h-14 rounded-xl">
                    <span className = "text-sm font-medium">Back to top</span>
                    <ArrowUpIcon className = "w-8 h-8 p-2 text-white "/>
                </a>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer/>
    </main>
  )
}


// export async function getStaticProps(){
//   const {data} = await storefront(productsQuery)
//   return{
//     props:{
//       products:data.products
//     }
//   }
// }


const gql = String.raw

export async function getStaticPaths(){
  const {data} = await storefront(gql`
    {
      products(first:6){
        edges{
          node{
            handle
          }
        }
      }
    }
  `)
  return{
    paths: data.products.edges.map(product => ({params: {product: product.node.handle}})),
    fallback:false,
  }
}

export async function getStaticProps({params}){
  const {data} = await storefront(singleProductQuery, {handle:params.product})
  return {
    props:{
      product:data.product
    }
  }
}

const singleProductQuery = gql`
query SingleProduct($handle: String!) {
  product(handle: $handle) {
    id
    title
    description
    priceRange {
      minVariantPrice {
        amount
      }
    }
    variants(first:2){
      edges {
        node {
          id
          title
        }
      }
    }
    images(first: 6) {
      edges {
        node {
          transformedSrc
          altText
        }
      }
    }
  }
}
`

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


export default ProductPage


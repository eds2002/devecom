import {Faq, Footer, Navigation,ProductOverview, ProductSpecs, Reviews} from '../../components'
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { RadioGroup } from '@headlessui/react';
import Link from 'next/link';
import Head from 'next/head';
import { storefront } from '../../utils';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductPage = ({product}) => {
  // TODO Set information necessary for page to load.
  const variants = product.variants?.edges
  const images = product.images.edges 
  const title = product.title 
  const desc = product.description 
  const price = product.priceRange.minVariantPrice.amount 

  const [lastScrollY, setLastScrollY] = useState(0);
  const [popup, setPopup] = useState(false)
  const [cartPopup, setCartPopup] = useState(true)
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
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
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlPopup);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlPopup);
      };
    }
  }, [lastScrollY]);
  return (
    <main className = "relative">
      <Head>
        <meta charSet='UTF-8'/>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        <title>Buy The Bula Mic - Bula</title>
        <meta name = "description" content = "Shop The New Bula Mic. The Best Wireless Phone Microphone On The Market Right Now."/>
        <meta name = "keywords" content = 'BULA, MICROPHONE, PHONE, WIRELESS, BLUETOOTH, MIC'/>
        {/* Favicon */}
      </Head>
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
              <div className = "absolute flex items-center justify-center w-32 py-2 mb-6 mr-6 text-white bg-indigo-600 rounded-full shadow-xl" onClick = {()=>setCartPopup(!cartPopup)}>
                  <span className = "text-sm font-medium cursor-pointer" onClick = {()=>scrollToTop()}>Back to top</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </main>
  )
}


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


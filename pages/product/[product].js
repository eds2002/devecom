import {Announcement, Faq, Footer, Navigation,ProductOverview, ProductSpecs, Reviews} from '../../components'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const ProductPage = () => {
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
    <main className = "relative bg-white">
        <Navigation/>
        <ProductOverview/>
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
                <a className = "absolute flex items-center justify-center w-32 mb-6 mr-6 bg-blue-200 shadow-xl h-14 rounded-xl">
                    <span className = "text-sm font-medium">Back to top</span>
                    <ArrowUpIcon className = "w-8 h-8 p-2 text-gray-900 "/>
                </a>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer/>
    </main>
  )
}

export default ProductPage
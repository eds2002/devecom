import React from 'react'
import { Footer, Navigation,AnimateFeature } from '../components'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Head from 'next/head'



const Bulamic = () => {
  return (
    <>
          <Head>
            <meta charSet='UTF-8'/>
            <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
            <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
            <title>Introducing the Bula Mic - Bula</title>
            <meta name = "description" content = "Bula's Microphones Are The New Top Of The Line Quality Phone Microphones."/>
            <meta name = "keywords" content = 'BULA, MICROPHONE, PHONE, WIRELESS, BLUETOOTH, MIC'/>
          {/* Favicon */}
        </Head>
        <Navigation shopNav = 'true'/>
        <section className = "h-[100vh] pt-[152px] relative flex justify-center items-center">
            <div className = "flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="flex-1 py-2 text-5xl font-extrabold text-center text-white sm:text-6xl md:text-7xl lg:text-8xl">
                    The only mic you&apos;ll ever need is now here.
                </h1>
            </div>
        </section>
        
        <section className = "relative flex items-center justify-center text-white bg-[#0b0b0b]">
            <div className = "h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-[100px] w-full">
                <div className = "w-full">
                    
                    <AnimateFeature feature = "Innovative bluetooth technology."/>
                    <AnimateFeature feature = "Lightweight and portable for any situation."/>
                    <AnimateFeature feature = "Durability made to last years."/>
                    <AnimateFeature feature = "Crisp noise cancellation"/>
                    <AnimateFeature feature = "360° omidirectional microphone"/>

                    <motion.div className = "flex flex-col items-center py-10 text-2xl font-medium text-gray-300 mb-7"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: false }}
                        transition={{delay:0.2}}
                    >
                        <h3 className = "my-5 text-sm  text-center lg:text-md xl:text-lg text-[#F7EBFF]/50"> Bula Mic</h3>
                        <p className = "max-w-xl text-5xl font-bold text-center lg:text-6xl xl:text-7xl text-[#F7EBFF]">The last mic you&apos;ll ever need.</p>
                        <div className = "flex items-center justify-center w-full max-w-lg my-10">
                            <Link href = "/product/bula-mic">
                                <a className = "flex items-center justify-center w-full py-3 text-sm max-w-[200px] text-center font-medium text-white bg-indigo-600 rounded-lg md:inline ">
                                    Buy now
                                </a>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* <div className = "fixed left-0 right-0 top-[600px] bottom-[600px] bg-red-500">

            </div> */}
        </section>
    </>
  )
}

export default Bulamic
import React from 'react'
import { Announcement, Navigation, Shopnav } from '../components'
import { CheckCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'

const cubed = () => {
  return (
    <>
        <Navigation shopNav = 'true'/>
        <section className = "h-[85vh] bg-white top-[152px] relative flex justify-center items-center">
            <div className = "flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className="py-2 text-5xl font-extrabold text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r bg-clip-text from-purple-400 to-red-600">
                    Introducing the only lint roller you will ever need.
                </h1>
            </div>
        </section>
        
        <section className = "relative flex items-center justify-center top-[152px] text-white bg-[#072D47]">
            <div className = "h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-[100px]">
                <div>
                    <motion.h3 className="py-8 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        transition={{delay:0.2}}
                    >
                        A reusable lint roller with waste management.
                    </motion.h3>
                    <motion.h3 className="py-8 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: false }}
                        transition={{delay:0.2}}
                    >
                        Easy to clean, easy to use.
                    </motion.h3>
                    <motion.h3 className="py-8 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: false }}
                        transition={{delay:0.2}}
                    >
                        Time saver and money saver.
                    </motion.h3>
                    <motion.h3 className="py-8 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: false }}
                        transition={{delay:0.2}}
                    >
                        Extremely durable.
                    </motion.h3>
                    <motion.h3 className="py-2 mt-20 text-3xl font-bold text-white"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: false }}
                        transition={{delay:0.2}}
                    >
                        The last lint roller you'll ever buy.
                    </motion.h3>
                    <motion.p className = "text-2xl font-medium text-gray-300 mb-7"
                        initial={{ opacity: 0.2 }}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: false }}
                        transition={{delay:0.2}}
                    >Starting at $19.99</motion.p>
                    <div className = "flex w-full sm:block">
                        <Link href = "/product/asd">
                            <a className = "py-4 font-medium text-black bg-blue-200 rounded-lg px-14 md:px-[100px] flex md:inline justify-center items-center w-full">
                                Buy now
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default cubed
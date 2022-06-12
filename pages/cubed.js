import React from 'react'
import { Announcement, Navigation, Shopnav } from '../components'
import { CheckCircleIcon } from '@heroicons/react/outline'

const cubed = () => {
  return (
    <>
        <Navigation shopNav = 'true'/>
        <section className = "h-[85vh] bg-white top-[152px] relative flex justify-center items-center">
            <div className = "flex items-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Cubed. The gadget that does not exist.
                </h1>
            </div>
        </section>
        
        <section className = "relative h-[500vh] flex items-center justify-center top-[152px] text-white bg-gradient-to-b from-[#BFDBFE] to-[#072D47]">
            <div className = "h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-[100px]">
                <div className = "flex flex-col items-center text-xl text-center my-[100px]">
                    <CheckCircleIcon className="w-24 h-24 text-blue-500" aria-hidden="true"/>
                    <p className = "text-6xl font-medium my-[10px] w-[80%] text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-600">Designed to keep your beverage hot or cold for long hours.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default cubed
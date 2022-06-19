import React from 'react'
import Link from 'next/link'

const Shopnav = () => {
  return (
      <div className = "absolute flex items-center justify-center w-full h-12 shadow-xl bg-white/10 backdrop-blur-lg z-[-1]">
        <div className="flex items-center justify-between flex-1 h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 max-h-10">
            <p className = "font-bold text-white">Bula Mic</p>
            <Link href = "/product/bula-mic">
              <a className = "py-[4px] px-[15px] text-white bg-indigo-600 rounded-full text-xs font-medium hover:bg-indigo-700">Buy now</a>
            </Link>
        </div>
      </div>
  )
}

export default Shopnav
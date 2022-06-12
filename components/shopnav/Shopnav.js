import React from 'react'
import Link from 'next/link'

const Shopnav = () => {
  return (
      <div className = "absolute flex items-center justify-center w-full h-12 shadow-xl bg-gray-50">
        <div className="flex items-center justify-between flex-1 h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 max-h-10">
            <p className = "font-bold text-black">Cubed.</p>
            <Link href = "/product/cubed">
              <a className = "py-[4px] px-[15px] bg-blue-200 rounded-full text-xs text-black hover:bg-blue-300">Buy now</a>
            </Link>
        </div>
      </div>
  )
}

export default Shopnav
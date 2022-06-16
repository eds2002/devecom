import { ChevronRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
const Hero = () => {
  return (
    <div className="mx-auto  w-full h-[100vh] flex items-center justify-center relative overflow-hidden max-w-2xl lg:max-w-7xl lg:px-8">
        <div className = "flex flex-col items-start justify-center w-full h-full pb-20 mt-[104px] absolute inset-0 z-10 px-4">
            <span className = "px-2 mb-3 text-sm font-medium text-white border-2 border-indigo-600 rounded-full">On Sale 15% Off</span>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                The last mic you&apos;ll ever need.
                {/* <span className = "relative before:content-[''] before:bg-[#2cb67d]/50 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[35%]  before:rounded-xl before:z-[-1] font-extrabold"> bulk </span> */}
            </h1>
            <div className="w-full mt-5 md:max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="flex items-center justify-start flex-1 w-full rounded-md gap-x-3">
                    <Link href = "/product/bulamic">
                        <a className="relative flex w-[150px] sm:w-[250px] items-center justify-center py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:text-lg transition active:bg-indigo-600">
                            <p className = "whitespace-nowrap">Shop now</p>
                        </a>
                    </Link>
                    <Link href = "/bula-mic">
                        <a className = "flex items-center justify-center text-white transition hover:text-gray-400">
                            Learn more
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <div className="relative grid w-full h-full grid-cols-12 grid-row-1 top-[104px] gap-3">
            {/* Product image */}
            <div className = "relative col-span-5 col-start-5 row-start-1 bg-gray-500">askjldf</div>

            {/* Details */}
            <div className = "relative col-span-4 col-start-10 row-start-1">
            </div>
        </div>
    </div>
  )
}

export default Hero
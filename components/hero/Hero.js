import { ChevronRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import Image from "next/image"
import heroImg from '../../assets/heroImage.webp'
const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full pt-[104px] h-[90vh] md:h-[100vh] max-w-2xl mx-auto lg:max-w-7xl lg:px-8">
        <div className = "relative flex flex-col w-full h-full max-w-4xl md:flex-row ">    
            <div className = "flex flex-col items-center justify-center flex-1 w-full h-full px-4 md:items-start">
                <h1 className = "max-w-xl text-4xl font-medium text-white">Bula Mic</h1>
                <p className="max-w-xl my-2 text-lg font-normal tracking-tight text-white sm:text-xl md:text-2xl">
                    The last mic you&apos;ll ever need.
                </p>
                <div className="w-full mt-3 md:max-w-md sm:flex sm:justify-center">
                    <div className="flex flex-col items-center justify-center flex-1 w-full rounded-md md:justify-start gap-x-3 md:flex-row">
                        <Link href = "/product/bula-mic">
                            <a className="relative flex w-[150px] sm:w-[200px] items-center justify-center py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700  transition active:bg-indigo-600">
                                <p className = "whitespace-nowrap">Shop now</p>
                            </a>
                        </Link>
                        <Link href = "/bulamic">
                            <a className = "flex items-center justify-center my-2 text-xs text-white transition hover:text-gray-400">
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = 'flex items-center justify-center flex-1'>
                <div className = " w-[50%] md:w-full">
                    <Image src = {heroImg} priority alt = "The official Bula Mic logo. A company dedicated to selling quality microphones."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
import { ChevronRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
const Hero = () => {
  return (
    <div className="mx-auto  w-full h-[100vh] flex items-center justify-center relative overflow-hidden max-w-2xl lg:max-w-7xl lg:px-8">
        <div className = "flex flex-col items-start justify-center w-full h-full pb-20 mt-[104px] absolute inset-0 z-10 px-4">
            <span className = "px-2 mb-3 text-sm font-medium text-gray-900 border-2 border-black rounded-full">Now 15% Off.</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl">
                <span className = "relative before:content-[''] before:bg-yellow-200 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[35%]  before:rounded-xl before:z-[-1]"> Stylish </span>
                in everyday life.
            </h1>
            <p className="max-w-md mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="w-full mt-5 md:max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="flex items-center justify-start flex-1 w-full rounded-md gap-x-3">
                    <Link href = "/product/cubed">
                        <a className="relative flex w-[150px] sm:w-[250px] items-center justify-center py-2 text-base font-medium text-black bg-blue-200 border border-transparent rounded-md hover:bg-blue-300 md:text-lg transition active:bg-blue-200">
                            <p className = "whitespace-nowrap">Shop now</p>
                            <span className = "absolute right-0 flex items-center justify-center pr-3 font-bold">
                                <ChevronRightIcon className = "w-5 h-5 flex-nowrap"/>
                            </span>
                        </a>
                    </Link>
                    <Link href = "/cubed">
                        <a className = "flex items-center justify-center transition hover:text-gray-300">
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
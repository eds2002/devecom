import Image from "next/image"
import Link from "next/link"
import promoImage from '../../assets/promoimage.webp'
const Promo = () => {
  return (
    <div className="bg-[#000000]">
        <div>
            <div className="relative overflow-hidden h-[500px] py-10">
                <div className="absolute inset-0">
                    <Image
                        src={promoImage}
                        alt="An image of image"
                        layout = 'fill'
                        className="object-cover object-center w-full h-full"
                    />
                    <div className = "absolute inset-0 w-full h-full"></div>
                </div>
                <div className="relative w-full h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex flex-col items-center justify-center w-full h-full mx-auto">
                        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-7xl">
                            Bula Mic
                        </h2>
                        <p className = "text-xl text-gray-200">
                            The last mic you&apos;ll ever need.
                        </p>
                        <div className = "flex flex-col items-center justify-center w-full gap-1 my-3 ">
                            <Link href = "/product/bula-mic">
                                <a className="w-full px-8 py-2 text-xs font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 sm:w-auto active:bg-indigo-600 ">
                                    Shop Now
                                </a>
                            </Link>
                            <Link href = "/bula-mic">
                                <a className = "text-xs text-[#FEF7FF] transition cursor-pointer hover:text-gray-300">Learn more</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo
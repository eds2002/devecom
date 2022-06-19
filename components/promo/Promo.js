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
                        <h1 className = "max-w-xl text-6xl font-medium text-white">Bula Mic</h1>
                        <p className="max-w-xl my-2 text-lg font-normal tracking-tight text-gray-400 sm:text-xl md:text-2xl">
                            The last mic you&apos;ll ever need.
                        </p>
                        <div className = "flex flex-col items-center justify-center w-full gap-1 my-2 ">
                            <Link href = "/product/bula-mic">
                                <a className="w-auto px-8 py-2 text-xs font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 active:bg-indigo-600 ">
                                    Shop Now
                                </a>
                            </Link>
                            <Link href = "/bulamic">
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
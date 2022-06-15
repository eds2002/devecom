import Image from "next/image"
import Link from "next/link"
const Promo = () => {
  return (
    <div className="py-24 bg-[#16161a]">
        <div>
            <div className="relative overflow-hidden h-[500px] py-10">
                <div className="absolute inset-0">
                    <Image
                        src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                        alt="An image of image"
                        layout = 'fill'
                        className="object-cover object-center w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                    <div className = "absolute inset-0 w-full h-full bg-black/75"></div>
                </div>
                <div className="relative w-full h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex flex-col items-start justify-end w-full h-full mx-auto">
                        <h2 className="max-w-3xl text-4xl font-medium tracking-tight text-white md:text-7xl">
                            The last mic you&apos;ll ever need.
                        </h2>
                        <div className = "flex flex-col items-center w-full gap-3 my-8 sm:justify-start sm:flex-row ">
                            <Link href = "/product/bula-mic">
                                <a className="w-full px-8 py-3 text-sm font-medium text-center text-white bg-indigo-600 rounded-md md:text-base hover:bg-indigo-700 sm:w-auto active:bg-indigo-600 ">
                                    Shop Now
                                </a>
                            </Link>
                            <Link href = "/bulamic">
                                <a className = "text-sm text-white transition cursor-pointer hover:text-gray-300">Learn more</a>
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
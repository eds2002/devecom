import Image from "next/image"
const Promo = () => {
  return (
    <div className="py-24 bg-white">
        <div>
            <div className="relative overflow-hidden h-[500px] py-10">
                <div className="absolute inset-0">
                    <Image
                        src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                        alt="An image of image"
                        layout = 'fill'
                        className="object-cover object-center w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                    <div className = "absolute inset-0 w-full h-full bg-black/50"></div>
                </div>
                <div className="relative w-full h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative flex flex-col items-start justify-end w-full h-full mx-auto">
                        <h2 className="max-w-3xl text-4xl tracking-tight text-white md:text-7xl">
                            A waterproof collar thats on with a single click.
                        </h2>
                        <div className = "flex flex-col items-center w-full gap-3 my-8 sm:justify-start sm:flex-row ">
                            <a
                            href="#"
                            className="w-full px-8 py-3 text-sm font-medium text-center text-gray-900 bg-blue-200 rounded-md md:text-base hover:bg-blue-300 sm:w-auto active:bg-blue-200 "
                            >
                                Buy Cubed.
                            </a>
                            <a  href = "/cubed" className = "text-sm text-white cursor-pointer">Learn more.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo
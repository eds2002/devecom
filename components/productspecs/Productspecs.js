import Image from "next/image"
import Link from "next/link"
const Productspecs = () => {
  return (
    <div>
        <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            {/* Details section */}
            <section aria-labelledby="details-heading">
                <div className="flex flex-col items-center text-center">
                    <h2 id="details-heading" className="max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    The little details things matter to us.
                    </h2>
                    <p className="max-w-3xl mt-3 text-lg text-[#94a1b2]">
                        Take a quick look at what makes our microphone one of the best microphones out there.
                    </p>
                </div>

                <div className="grid grid-cols-1 mt-16 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                    <div>
                        <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                            <Image
                            src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                            alt="Drawstring top with elastic loop closure and textured interior padding."
                            className="object-cover object-center w-full h-full"
                            layout = 'fill'
                            />
                        </div>
                        <p className="mt-8 text-base text-gray-500">
                            The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                            combination of on-the-go treats that your heart desires. Yes, we did the math.
                        </p>
                    </div>
                    <div>
                        <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                            <Image
                            src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                            alt="Front zipper pouch with included key ring."
                            className="object-cover object-center w-full h-full"
                            layout = 'fill'
                            />
                        </div>
                        <p className="mt-8 text-base text-gray-500">
                            Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                            for even the most unexpected snack attacks and sharing needs.
                        </p>
                    </div>
                    <div>
                        <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2">
                            <Image
                            src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                            alt="Front zipper pouch with included key ring."
                            className="object-cover object-center w-full h-full"
                            layout = 'fill'
                            />
                        </div>
                        <p className="mt-8 text-base text-gray-500">
                            Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                            for even the most unexpected snack attacks and sharing needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Productspecs
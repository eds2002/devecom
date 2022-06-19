import Image from "next/image"
import Link from "next/link"
import { features } from "./productspecs.data"
const Productspecs = () => {
  return (
    <div className="bg-black">
      <div className="py-24 mx-auto max-w-7xl sm:py-32 sm:px-2 lg:px-4">
        <div className="max-w-2xl px-4 mx-auto lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-[#94a1b2]">The Bula Mic</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">The little details matter</p>
            <p className="mt-4 text-[#94a1b2]">
                Don&apos;t be fooled by the Bula Microphone&apos;s tiny frame. It is <b className = "text-gray-300">packed</b> with features that make it one of the most <b className = "text-gray-300">powerful</b> microphones on the market.
            </p>
          </div>

          <div className="pt-10 mt-10 space-y-16 border-t border-gray-500/20 sm:pt-16 sm:mt-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
              >
                <div className="mt-6 lg:mt-0 lg:col-span-5 xl:col-span-4">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-sm text-[#94a1b2]">{feature.description}</p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <div className="overflow-hidden bg-black rounded-lg aspect-w-5 aspect-h-2">
                    <Image src={feature.imageSrc} layout = 'fill' alt={feature.imageAlt} className="object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productspecs
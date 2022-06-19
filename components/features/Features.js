import { features } from "../../constants/constant"
import Image from 'next/image'
import Link from "next/link"
const Features = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className = "bg-[#000000] pb-24">
        <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="py-24 text-5xl font-bold tracking-tight text-[#FEF7FF] lg:text-6xl">
                    Astonishingly small and powerful
                </h2>
            </div>

            <div className="space-y-16">
                {features.map((feature, featureIdx) => (
                <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
                >
                    <div
                    className={classNames(
                        featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                        'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                    )}
                    >
                        <h3 className="text-lg font-bold text-white lg:text-3xl">{feature.name}</h3>
                        <div className="mt-2 text-sm text-[#94a1b2]" dangerouslySetInnerHTML={{__html: feature.description}}/>
                        <div className = "flex flex-col items-center gap-3 my-8 lg:items-center lg:flex-row md:justify-start">
                            <Link href="/product/bula-mic">
                                <a className="w-full px-10 py-2 text-xs font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 lg:w-auto active:bg-indigo-600">
                                    Shop now
                                </a>
                            </Link>
                            <Link href = "/bulamic" >
                                <a className = "text-xs text-white transition cursor-pointer hover:text-gray-500">
                                    Learn more
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div
                    className={classNames(
                        featureIdx % 2 === 0 ? 'lg:col-start-8 xl:col-start-5' : 'lg:col-start-1',
                        'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                    )}
                    >
                        <div className="overflow-hidden bg-black rounded-lg aspect-w-5 aspect-h-2">
                            <Image src={feature.imageSrc} alt={feature.imageAlt} layout = 'fill'/*width = {100} height = {100} className="object-cover object-center"*/ />
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Features
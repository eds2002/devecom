import { features } from "../../constants/constant"
import Image from 'next/image'
import Link from "next/link"
const Features = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div>
        <div className="max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="py-24 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
                Our motto is simple.<br/>
                <span className = "relative before:content-[''] before:bg-yellow-200 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[35%]  before:rounded-xl before:z-[-1] italic"> Quality </span>
                over
                <span className = "relative before:content-[''] before:bg-yellow-200 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[35%]  before:rounded-xl before:z-[-1] italic"> quantity </span>
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
                        <h3 className="text-lg font-bold text-gray-900 lg:text-3xl">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        <div className = "flex flex-col items-center gap-3 my-8 lg:items-center lg:flex-row md:justify-start">
                            <Link href="#">
                                <a className="w-full px-8 py-2 text-sm font-medium text-center text-gray-900 bg-blue-200 rounded-md md:text-base hover:bg-blue-300 lg:w-auto active:bg-blue-200">
                                    Shop now
                                </a>
                            </Link>
                            <Link href = "/cubed" >
                                <a className = "text-xs sm:text-[15px] text-gray-600 cursor-pointer">
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
                        <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-2">
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
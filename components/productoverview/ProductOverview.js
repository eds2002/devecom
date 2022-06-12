import { useState,Fragment } from 'react'
import { RadioGroup,Dialog,Transition } from '@headlessui/react'
import { StarIcon, XIcon } from '@heroicons/react/solid'
import {reviews,policies} from '../../constants/constant'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router'
import Image from 'next/image';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const product = {
    name: 'Basic Tee',
    price: '$35',
    rating: 3.9,
    reviewCount: 512,
    href: '#',
    images: [
      {
        id: 1,
        imageSrc: 'https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
      },
      {
        id: 2,
        imageSrc: 'https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
      },
      {
        id: 3,
        imageSrc: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
      },
    ],
    colors: [
      { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
      { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
      { name: 'Heather Grey', bgColor: 'bg-blue-400', selectedColor: 'ring-blue-400' },
      { name: 'Heather Grey', bgColor: 'bg-red-400', selectedColor: 'ring-red-400' },
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
      'Only the best materials',
      'Ethically and locally made',
      'Pre-washed and pre-shrunk',
      'Machine wash cold with similar colors',
    ],
}
  

export default function ProductOverview() {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(false) 
  function closeModal() {
    setIsOpen(false)
  }

  function openModal(hrefId) {
    setIsOpen(true)
    router.push(`#image-${hrefId}`)
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  
  const month = [{month:"January", days: 31},{month:"February", days: 28},{month:"March", days:31},{month:"April", days:30},{month:"May", days:31},{month:"June", days:30},{month:"July", days:31},{month:"August",days:31},{month:"September",days:30},{month:"October",days:31},{month:"November",days:30},{month:"December",days:31}];
  let minDaysToAdd = 14; //Max amount of days
  let maxDaysToAdd = 7; //Max amount of days

  //Estimate delivery date from today   
  let todaysDate = new Date();
  
  let minDeliveryDate = todaysDate.setDate(todaysDate.getDate() + minDaysToAdd);
  let maxDeliveryDate = todaysDate.setDate(todaysDate.getDate() + maxDaysToAdd);
  const minDate = new Date(minDeliveryDate)
  const maxDate = new Date(maxDeliveryDate)


  //Min delivery date   
  let minMonth = month[minDate.getMonth()].month
  let minDays = minDate.getDate() > month[minDate.getMonth()].days ? minDate.getDate() - month[minDate.getMonth()].days : minDate.getDate()
  let minYear = minDate.getFullYear()

  //Max delivery date  
  let maxMonth = month[maxDate.getMonth()].month
  let maxDays = maxDate.getDate() > month[maxDate.getMonth()].days ? maxDate.getDate() - month[maxDate.getMonth()].days : maxDate.getDate()
  let maxYear = maxDate.getFullYear()
  return (
    <div className="px-4 bg-white pt-[154px] pb-24 relative">
        {/* Product */}
        <section className="relative flex items-center justify-between h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className = "grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5">
                {/* Product images */}
                <div className = "col-span-1 md:col-span-2 lg:col-span-3 h-full md:h-[1000px]rounded-lg">
                    <div className = "flex flex-col gap-3">
                        <div className = "grid grid-cols-2 gap-3">
                            <div className="w-full col-span-2 overflow-hidden hover:scale-[1.01] rounded-lg cursor-pointer aspect-w-3 aspect-h-2 transition">
                                <Image
                                src="https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="object-cover object-center w-full h-full"
                                onClick = {()=>openModal(0)}
                                layout = 'fill'
                                priority
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2 hover:scale-[1.01] cursor-pointer transition ">
                                <Image
                                src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="object-cover object-center w-full h-full"
                                onClick = {()=>openModal(1)}
                                layout = 'fill'
                                priority
                                />
                            </div>
                            <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2 hover:scale-[1.01] cursor-pointer transition">
                                <Image
                                src="https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Drawstring top with elastic loop closure and textured interior padding."
                                className="object-cover object-center w-full h-full"
                                onClick = {()=>openModal(2)}
                                layout = 'fill'
                                priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Information */}
                <div className = "md:col-start-3 md:col-end-5 lg:col-start-4 lg:col-end-5">
                    <div className="flex items-center justify-between mt-8">
                        <h1 className="text-3xl font-bold text-gray-900">Cubed.</h1>
                        <p className="text-xl font-medium text-gray-900">$19.99</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="sr-only">Reviews</h2>
                        <div className="flex items-center">
                            <p className="text-sm text-gray-700">
                                {reviews.average}
                                <span className="sr-only"> out of 5 stars</span>
                            </p>
                            <div className="flex items-center ml-1">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                    key={rating}
                                    className={classNames(
                                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                            ·
                            </div>
                            <div className="flex ml-4">
                                <a href="#reviews" className="text-xs font-medium text-black hover:text-gray-500">
                                    See all {reviews.featured.length} reviews
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className = "mt-8">
                        {/* Color picker */}
                        <div>
                            <h2 className="text-sm font-medium text-gray-900">Color</h2>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                                    {product.colors.map((color) => (
                                        <RadioGroup.Option
                                        key={color.name}
                                        value={color}
                                        className={({ active, checked }) =>
                                            classNames(
                                            color.selectedColor,
                                            active && checked ? 'ring ring-offset-1' : '',
                                            !active && checked ? 'ring-2' : '',
                                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                            )
                                        }
                                        >
                                        <RadioGroup.Label as="span" className="sr-only">
                                            {color.name}
                                        </RadioGroup.Label>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                            color.bgColor,
                                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                            )}
                                        />
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>
                        </div>
                        <div className = "flex flex-col mt-6 gap-y-3">
                            <button
                            type="submit"
                            className="flex items-center justify-center w-full px-8 py-2 text-base text-black transition bg-blue-200 border border-transparent rounded-md hover:bg-blue-300/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200"
                            >
                            Add to cart
                            </button>
                            <p className = "text-xs text-gray-700">Get it
                              <span className = "font-bold">{` ${minMonth} ${minDays}, ${minYear} - ${maxMonth} ${maxDays}, ${maxYear}`}</span>
                            </p>
                        </div>
                    </form>

                    <div className="mt-4 prose-sm prose text-gray-500">
                        {/* Description */}
                        <h2 className="mt-8 mb-2 text-sm font-medium text-gray-900">Description</h2>
                        <p className = "mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga rerum vel suscipit esse, harum vero at, blanditiis ad omnis alias culpa quidem itaque. At eveniet illo odit corporis ipsa.</p>
                        <p className = "mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga rerum vel suscipit esse, harum vero at, blanditiis ad omnis alias culpa quidem itaque. At eveniet illo odit corporis ipsa.</p>
                        <p className = "mb-5 text-xs font-bold text-black">Due to ongoing COVID-19 delays, shipping may take 4-6 weeks.</p>
                    </div>

                    <div aria-labelledby="policies-heading" className="mt-10">
                        {/* Policies */}
                        <h2 id="policies-heading" className="sr-only">
                        Our Policies
                        </h2>
                        <dl className="grid gap-3 grid-row-3">
                        {policies.map((policy) => (
                            <div key={policy.name} className="flex flex-col items-center justify-center p-1 text-center border border-gray-200 rounded-lg bg-gray-50">
                                <dt>
                                    <policy.icon className="flex-shrink-0 w-5 h-5 mx-auto text-gray-400" aria-hidden="true" />
                                    <span className="mt-4 text-xs font-medium text-gray-900">{policy.name}</span>
                                </dt>
                            </div>
                        ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[9999999999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative flex overflow-scroll max-w-7xl snap-x snap-mandatory scroll-smooth scrollbar">
                  <div className = " pointer-events-none flex gap-x-3 before:shrink-0 lg:before:w-[15vw] after:shrink-0 after:w-[30vw]">
                    {product.images.map((image,id)=>(
                        <div key = {id} className = "h-[500px] shrink-0 snap-center relative w-[400px] sm:w-[500px] md:w-[700px]">
                            <Image 
                                id = {`image-${id}`}
                                src = {image.imageSrc} 
                                alt = {image.imageAlt}
                                layout = 'fill'
                                className="object-cover object-center w-full h-full pointer-events-none rounded-xl"   
                                />
                        </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
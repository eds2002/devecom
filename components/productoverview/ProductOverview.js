import { useState,Fragment } from 'react'
import { RadioGroup,Dialog,Transition } from '@headlessui/react'
import { StarIcon, QuestionMarkCircleIcon} from '@heroicons/react/solid'
import {reviews,policies} from '../../constants/constant'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';


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
    connectorType: [
      { name: 'iOS', description: 'Lightning' },
      { name: 'Android', description: 'USB Type C' },
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
  

export default function ProductOverview({images}) {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(false) 
  function closeModal() {
    setIsOpen(false)
  }

  function openModal(hrefId) {
    setIsOpen(true)
    router.push(`#image-${hrefId}`)
  }

  const [selectedCable, setSelectedCable] = useState(product.connectorType[0])
    
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
    <div className="px-4 bg-[#16161a] pt-[154px] relative">
        {/* Product */}
        <section className="relative flex items-center justify-between h-full mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className = "grid w-full grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-4 gap-x-5">
                {/* Product images */}
                <div className = "h-full col-span-1 overflow-hidden rounded-lg md:col-span-2 lg:col-span-3">
                    <div className = "flex flex-col ">
                        <div className = "grid grid-cols-3 gap-2">
                            {/* Featured image */}
                            <div className="w-full col-span-3 lg:col-span-4 overflow-hidden hover:scale-[1.01] rounded-lg cursor-pointer aspect-w-3 aspect-h-2 transition">
                                <Image
                                src={images[0].node.transformedSrc}
                                alt={images[0].node.altText}
                                className="object-cover object-center w-full h-full"
                                onClick = {()=>openModal(0)}
                                layout = 'fill'
                                priority
                                />
                            </div> 

                            {/* Sub images */}
                            {images.map((image,index)=>(
                              <>

                                {index != 0  ? 
                                  <div className="w-full overflow-hidden rounded-lg aspect-w-3 aspect-h-2 hover:scale-[1.01] row-start-2 cursor-pointer transition h-[100px]">
                                      <Image
                                      src={image.node.transformedSrc}
                                      alt={image.node.altText}
                                      className="object-cover object-center w-full h-full"
                                      onClick = {()=>openModal(1)}
                                      layout = 'fill'
                                      priority
                                      />
                                  </div>
                                :
                                  ''
                                }
                              </>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Information */}
                <div className = "md:col-start-3 md:col-end-5 lg:col-start-4 lg:col-end-5">
                    <div className="flex items-center mt-8 gap-x-3">
                        <h1 className="text-lg font-semibold text-white ">Bula Microphone</h1>
                        <div className = "w-[0.5px] h-5 text-white bg-white"></div>
                        <p className="flex items-center justify-center text-lg font-semibold text-white gap-x-3">
                          $26.99
                        </p>
                    </div>

                    {/* Reviews
                    <div className="mt-4">
                        <h2 className="sr-only">Reviews</h2>
                        <div className="flex items-center">
                            <p className="text-sm text-white">
                                {reviews.average}
                                <span className="sr-only"> out of 5 stars</span>
                            </p>
                            <div className="flex items-center ml-1">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                    key={rating}
                                    className={classNames(
                                        reviews.average > rating ? 'text-indigo-600' : 'text-gray-400',
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
                                <Link href = "#reviews">
                                  <a className="text-xs font-medium text-[#2cb67d] hover:text-[#2cb67d]/50">
                                      See all {reviews.featured.length} reviews
                                  </a>
                                </Link>
                            </div>
                        </div>
                    </div> */}

                    {/* Phone select, Add to cart, quantity */}
                    <form className = "mt-4">
                        {/* Color picker */}
                        <div>
                            <div className="w-full sm:flex sm:justify-between">
                              {/* Size selector */}
                              <RadioGroup value={selectedCable} onChange={setSelectedCable} className = "w-full">
                                <RadioGroup.Label className="block text-sm font-medium text-white ">Connector: <span className = "font-normal text-gray-400">{selectedCable.name}</span></RadioGroup.Label>
                                <div className="flex mt-2 gap-x-3">
                                  {product.connectorType.map((connector) => (
                                    <RadioGroup.Option
                                      as="div"
                                      key={connector.name}
                                      value={connector}
                                      className={({ active }) =>
                                        classNames(
                                          active ? 'ring-1 ring-indigo-600' : '',
                                          'relative flex-1 border border-gray-600 rounded-lg px-4 py-2 cursor-pointer focus:outline-none'
                                        )
                                      }
                                    >
                                      {({ active, checked }) => (
                                        <>
                                          <RadioGroup.Label as="p" className="text-sm font-medium text-white">
                                            {connector.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description as="p" className="mt-1 text-xs text-[#94a1b2]">
                                            {connector.description}
                                          </RadioGroup.Description>
                                          <div
                                            className={classNames(
                                              active ? 'border' : 'border-2',
                                              checked ? 'border-indigo-500' : 'border-transparent',
                                              'absolute -inset-px rounded-lg pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                          />
                                        </>
                                      )}
                                    </RadioGroup.Option>
                                  ))}
                                </div>
                              </RadioGroup>
                            </div>
                        </div>
                        <div className = "flex flex-col mt-6 gap-y-3">
                            <div className = "flex gap-x-3">
                              <select name = "quantity" className = "font-light bg-[#242629] text-white rounded-md border-none text-xs">
                                <option value = '1'>Qty: 1</option>
                                <option value = '2'>Qty: 2</option>
                                <option value = '3'>Qty: 3</option>
                                <option value = '4'>Qty: 4</option>
                                <option value = '5'>Qty: 5</option>
                              </select>
                              <button
                              type="submit"
                              className="flex items-center justify-center w-full py-2 text-xs font-medium text-white transition bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                              >
                              Add to cart
                              </button>
                            </div>
                            <p className = "text-xs text-gray-400">Get it
                              <span className = "font-bold text-white">{` ${minMonth} ${minDays}, ${minYear} - ${maxMonth} ${maxDays}, ${maxYear}`}</span>
                            </p>
                        </div>
                    </form>

                    {/* Description */}
                    <div className="mt-4 text-[#94a1b2] bg-[#242629] p-6 rounded-xl">
                        <h2 className = "sr-only" id = 'product-description'>Product Description</h2>
                        {/* Description */}
                        <h2 className="mb-2 text-sm font-semibold text-white ">The highest quality phone microphone</h2>
                        <p className = "mb-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga rerum vel suscipit esse, harum vero at, blanditiis ad omnis alias culpa quidem itaque. At eveniet illo odit corporis ipsa.</p>
                        <p className = "mb-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga rerum vel suscipit esse, harum vero at, blanditiis ad omnis alias culpa quidem itaque. At eveniet illo odit corporis ipsa.</p>
                        <p className = "text-xs font-bold text-white">Due to ongoing COVID-19 delays, shipping may take 4-6 weeks.</p>
                    </div>

                    <div aria-labelledby="policies-heading" className="mt-3">
                        {/* Policies */}
                        <h2 id="policies-heading" className="sr-only">
                        Our Policies
                        </h2>
                        {policies.map((policy) => (
                            <div key={policy.name} className="flex items-center justify-start p-2 text-center rounded-sm gap-x-3">
                              <policy.icon className="flex-shrink-0 w-5 h-5 text-indigo-600" aria-hidden="true" />
                              <span className="text-xs font-medium text-[#94a1b2]">{policy.name}</span>
                              <div className = "relative group">
                                <QuestionMarkCircleIcon className = "w-4 h-4 text-[#94a1b2] cursor-pointer" />
                                <div className = "absolute w-[200px] bg-[#16161a] border-gray-700 border-[1px] bottom-6 flex items-start justify-center flex-col p-5 rounded-lg shadow-lg shadow-gray-500/10 opacity-0 group-hover:opacity-100 pointer-events-none">
                                  <h3 className = "mb-2 text-sm font-medium text-white">{policy.name}</h3>
                                  <p className = "text-sm text-left text-[#94a1b2]">{policy.details}</p>
                                </div>
                              </div>

                            </div>
                        ))}
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
                    {images.map((image,id)=>(
                        <div key = {id} className = "h-[500px] shrink-0 snap-center relative w-[400px] sm:w-[500px] md:w-[700px]">
                            <Image 
                                id = {`image-${id}`}
                                src = {image.node.transformedSrc} 
                                alt = {image.node.altText}
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
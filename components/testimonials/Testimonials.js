import { UserTestimonials } from "./testimonial.data"
import { StarIcon } from '@heroicons/react/solid'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  
const Testimonials = () => {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        swipeToSlide: true,
      };
  return (
      <div className = "w-full overflow-hidden bg-[#0b0b0b] py-24">
        <div className="relative max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <div className = "flex flex-col items-center justify-center">
                <h1 className = "text-3xl font-bold text-center text-white sm:text-4xl">
                    Take a look at what our customers have to say
                </h1>
            </div>

            <Slider {...settings}>
                {UserTestimonials.map((review,id)=>(
                    <div className = "flex w-full " key = {id}>
                        <div className = "flex flex-col items-center justify-center w-full max-w-2xl px-4 mx-auto my-10 sm:px-6 lg:max-w-7xl lg:px-8" key = {id}>
                            <span className="inline-block w-20 h-20 overflow-hidden bg-gray-100 rounded-full">
                                <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </span>
                            <h1 className = "mt-5 text-xl font-bold text-white">{review.name}</h1>
                            <p className = "text-base font-medium text-[#94a1b2]">{review.location}</p>
                            <div className = "flex flex-col items-center justify-center mt-10">
                                <div className="flex items-center ml-1">
                                    {[0, 1, 2, 3, 4].map((index) => (
                                        <StarIcon
                                        key={index}
                                        className={classNames(
                                            review.rating > index ? 'text-indigo-600' : 'text-gray-400',
                                            'h-4 w-4 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className = "max-w-4xl mt-5 text-md  text-center text-[#94a1b2] md:text-xl">{review.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
      </div>
    
  )
}

export default Testimonials
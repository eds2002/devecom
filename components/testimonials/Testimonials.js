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
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        swipeToSlide: true,
      };
  return (
      <div className = "w-full overflow-hidden">

        <div className="relative max-w-2xl px-4 pb-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <div className = "flex flex-col items-center justify-center">
                <h1 className = "text-xl font-bold text-center sm:text-4xl">
                    Take a look at what our
                    <span className = "relative before:content-[''] before:bg-yellow-200 before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[35%]  before:rounded-xl before:z-[-1]"> customers </span>
                    have to say.
                </h1>
                <p className = "max-w-xl my-3 text-lg text-center text-gray-500">We value our customers and appreciate hearing how we can improve and better support you in the future.</p>
            </div>

            <Slider {...settings}>
                {UserTestimonials.map((review,id)=>(
                    <div className = "flex w-full ">
                        <div className = "flex flex-col items-center justify-center w-full max-w-2xl px-4 mx-auto my-10 sm:px-6 lg:max-w-7xl lg:px-8" key = {id}>
                            <span className="inline-block w-20 h-20 overflow-hidden bg-gray-100 rounded-full">
                                <svg className="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </span>
                            <h1 className = "mt-5 text-xl font-bold">{review.name}</h1>
                            <p className = "text-base font-medium text-gray-500">{review.location}</p>
                            <div className = "flex flex-col items-center justify-center mt-10">
                                <div className="flex items-center ml-1">
                                    {[0, 1, 2, 3, 4].map((index) => (
                                        <StarIcon
                                        key={index}
                                        className={classNames(
                                            review.rating > index ? 'text-yellow-400' : 'text-gray-200',
                                            'h-8 w-8 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className = "max-w-4xl mt-5 text-lg font-medium text-center text-gray-900 md:text-2xl">{review.review}</p>
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
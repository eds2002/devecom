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
                    We&apos;re the best - for good reasons
                </h1>
            </div>
            <div className = "flex flex-col w-full md:flex-row ">
                {UserTestimonials.map((review,id)=>(
                    <div className = "flex flex-col items-center justify-center w-full px-4 mx-auto my-10 sm:px-6 lg:max-w-7xl lg:px-8" key = {id}>
                        <div className = "flex flex-col items-center justify-center mt-10">
                            <p className = "mt-5 text-center text-gray-200 text-md">&quot;{review.review}&quot;</p>
                        </div>
                        <h1 className = "mt-5 text-sm italic font-medium text-gray-500">- {review.name}</h1>
                        <p className = "text-xs text-gray-500">{review.location}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    
  )
}

export default Testimonials
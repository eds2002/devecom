import { StarIcon } from '@heroicons/react/solid'
import {reviews} from '../../constants/constant'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
const Reviews = () => {
  return (
    <section aria-labelledby="reviews-heading" className="relative px-4 mx-auto mt-16 sm:mt-24 max-w-7xl sm:px-6 lg:px-8 mb-36" id = "reviews">
        <div className = "flex flex-col items-center justify-between sm:items-start">
            <h2 className="text-3xl font-bold text-left text-white sm:text-4xl">Recent Reviews</h2>
        </div> 

        <div className="pb-10 mt-6 space-y-10 border-b divide-y border-gray-400/20 divide-gray-400/20">
        {reviews.featured.map((review) => (
            <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                <div className="flex items-center xl:col-span-1">
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                        key={rating}
                        className={classNames(
                        review.rating > rating ? 'text-indigo-600' : 'text-gray-400',
                        'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                    />
                    ))}
                </div>
                <p className="ml-3 text-sm text-[#2cb67d]">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                <h3 className="text-sm font-medium text-white">{review.title}</h3>

                <div
                    className="mt-3 space-y-6 text-sm text-[#94a1b2]"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                />
                </div>
            </div>

            <div className="flex items-center mt-6 text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-white">{review.author}</p>
                <time
                dateTime={review.datetime}
                className="pl-4 ml-4 text-gray-500 border-l border-gray-200 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                {review.date}
                </time>
            </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Reviews
import { incentives } from "../../constants/constant"
import Image from "next/image"
const Keyfeatures = () => {
  return (
    <div className = "bg-[#242629]">
      <div className="relative flex items-center justify-center w-full max-w-2xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="p-16 px-6 rounded-2xl">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="grid max-w-sm grid-cols-1 mx-auto mt-12 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3 ">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" layout = 'fill' />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-xl font-bold text-white lg:text-2xl">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-[#94a1b2]">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Shop now button */}
            {/* <div className = "flex items-center justify-center w-full my-12">
                <button className = "py-3 font-medium bg-blue-200 rounded-lg hover:shadow-xl w-full lg:w-[300px] hover:bg-blue-300 ring-offset-2 active:ring-2 ring-blue-200 transition">
                    Shop now
                </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keyfeatures
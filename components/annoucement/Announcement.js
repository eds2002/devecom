import React from 'react'

const currencies = ['USD', 'CAD', 'AUD', 'EUR', 'GBP']

const Announcement = () => {
  return (
    <div className="bg-gray-900">
    {/* Top navigation */}
      <div className="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8 relative">
        {/* Currency selector */}
        {/* <form>
          <div>
            <label htmlFor="desktop-currency" className="sr-only">
              Currency
            </label>
            <div className="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white z-10">
              <select
                id="desktop-currency"
                name="currency"
                className="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent"
              >
                {currencies.map((currency) => (
                  <option key={currency}>{currency}</option>
                ))}
              </select>
              <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="w-5 h-5 text-gray-300"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 8l4 4 4-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form> */}
        {/* Annoucement */}
        <p className="flex-2 text-center text-sm font-medium text-white lg:flex-none absolute left-0 right-0">
          Free delivery worldwide.
        </p>
      </div>
    </div>
  )
}

export default Announcement
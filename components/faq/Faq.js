import { RadioGroup, Disclosure } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeIcon, BadgeCheckIcon, SwitchHorizontalIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { faqs } from './faq.data'
const Faq = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto">
            <div className = "flex items-center justify-between">
                <h2 className="text-3xl font-bold text-center text-white sm:text-4xl">Frequently asked questions</h2>
                <p></p>
            </div>           
            <dl className="mt-6 space-y-6 divide-y divide-gray-700">
                {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                    <>
                        <dt className="text-base">
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                            <span className="font-medium text-white">{faq.question}</span>
                            <span className="flex items-center ml-6 h-7">
                            <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden="true"
                            />
                            </span>
                        </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        <p className="text-base text-[#94a1b2]">{faq.answer}</p>
                        <div className = "mt-5 text-sm font-medium text-gray-500">
                          <p className = "inline">Answered by {faq.responder} </p>
                          <p className = "inline"> on {faq.date}</p>
                        </div>
                        </Disclosure.Panel>
                    </>
                    )}
                </Disclosure>
                ))}
            </dl>
        </div>
    </div>
  )
}

export default Faq
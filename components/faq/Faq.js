import { RadioGroup, Disclosure } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeIcon, BadgeCheckIcon, SwitchHorizontalIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { faqs } from './faq.data'
const Faq = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto">
            <div className = "flex flex-col items-center justify-between sm:items-start">
                <h2 className="flex flex-col items-start justify-center w-full text-3xl font-bold text-left text-white sm:text-4xl">
                    Frequently asked questions
                    <span className = "mt-2 text-xs font-normal text-indigo-600 transition hover:text-indigo-400">
                        <Link href = "/bula/support">
                            <a>Read all FAQ&apos;s</a>
                        </Link>
                    </span>
                </h2>
            </div>          
            <dl className="mt-6 space-y-6 divide-y divide-gray-500/40">
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
import { Disclosure } from "@headlessui/react"
import { CurrencyDollarIcon, GlobeIcon, BadgeCheckIcon, SwitchHorizontalIcon, ChevronDownIcon } from '@heroicons/react/outline'
import {Footer} from '../../components'
import Head from "next/head"

const FAQS = {
    shipping: [
        {
            question:'How much is shipping? ',
            answer:'We are happy to say... Shipping is FREE!'
        },
        {
            question:'When will my order ship?',
            answer:'We are currently in high demand so expect your product to ship within a 3 days to business weeks.'
        },
        {
            question:'How can I change my shipping address?',
            answer:'Email us at help@bula.com, we\'ll be happy to take care of you.'
        },
        {
            question:'Do you ship to PO Boxes?',
            answer:'No, we do not ship to PO Boxes.'
        },
    ],
    returnsAndExchanges: [
        {
            question:'How can I start a return or exchange?',
            answer:'We\'re sorry if something went wrong! We\'re not perfect, to make up for that we offer a return or exchange within 14 days of receiving your product. Simply email us at help@bula.com and we\'ll sort things out for you!',
        },
        {
            question:'What is your return policy?',
            answer:'We aren\'t perfect and we understand that. We offer a 2 week return policy starting on delivery date.',
        },
        {
            question:'My microphone was faulty, what can I do?',
            answer:'Please! We\'ll take care of that issue for you. Email us at help@bula.com',
        },
    ],
    billing:[
        {
            question:'What forms of payment do you accept?',
            answer:'We accepted credit card payments via Visa, Mastercard, Discover, and American Express, as well as debit cards. We also accept ShopPay, Paypal, Facebook Pay.',
        },
        {
            question:'When is my credit card charged?',
            answer:'We usually charge your card within 3 days to a week.'
        }
    ],
    productQuestions:[
        {
            question:'How durable is the microphone?',
            answer:'We designed our microphone with a sturdy base and a strong clip. I wouldn\'t worry too much about durabaility.',
        },
        {
            question:'Do you offer discounts?',
            answer:'Currently no! But stick around for random discount codes we may throw around!'
        },
        {
            question:'Do you have other microphones?',
            answer:'At the moment, no! But we are always trying to reinvent the wheel.'
        }
    ],
    orderQuestions:[
        {
            question:'Can I update my order?',
            answer:'Of course! Email us at help@bula.com and we\'ll help you out.',
        },
        {
            question:'How can I cancel my order?',
            answer:'A simple email to help@bula.com. No questions asked.',
        }
    ],
}

const support = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
  return (
    <>
        <Head>
        <meta charSet='UTF-8'/>
        <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
        <title>Support - Bula</title>
        <meta name = "description"/>
        <meta name = "keywords" content = 'BULA, MICROPHONE, PHONE, WIRELESS, BLUETOOTH, MIC'/>
        {/* Favicon */}
      </Head>
        <div className="relative flex items-center justify-center w-full pt-[104px] h-full max-w-2xl mx-auto lg:max-w-7xl lg:px-8">
            <div className = "w-full px-4">
                <div className = "w-full h-[50vh] flex items-center justify-center flex-col">
                    <h1 className = "text-6xl font-bold text-center text-white">Bula support & FAQs</h1>
                    <p className =  'mt-2 text-gray-400'>Need more help? Contact us at <a className = "text-indigo-600 underline transition hover:text-indigo-400" href = "hey" >help@bula.com</a></p>
                </div>
                
                {/* FAQS */}
                <div className = "py-12">
                    {/* Shipping FAQ */}
                    <div className = "my-24">
                        <h1 className = "text-3xl font-semibold text-white ">Shipping</h1>
                        <dl className="space-y-6 divide-y divide-gray-400/20">
                            {FAQS.shipping.map((faq) => (
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
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                    </div>


                    {/* Returns & Exchanges */}
                    <div className = "my-24">
                        <h1 className = "text-3xl font-semibold text-white ">Returns & Exchanges</h1>
                        <dl className="space-y-6 divide-y divide-gray-400/20">
                            {FAQS.returnsAndExchanges.map((faq) => (
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
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                    </div>

                    {/* Billing */}
                    <div className = "my-24">
                        <h1 className = "text-3xl font-semibold text-white ">Billing</h1>
                        <dl className="space-y-6 divide-y divide-gray-400/20">
                            {FAQS.billing.map((faq) => (
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
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                    </div>


                    {/* product Questions */}
                    <div className = "my-24">
                        <h1 className = "text-3xl font-semibold text-white ">Product Questions</h1>
                        <dl className="space-y-6 divide-y divide-gray-400/20">
                            {FAQS.productQuestions.map((faq) => (
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
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                    </div>


                    {/* order Questions */}
                    <div className = "my-10">
                        <h1 className = "text-3xl font-semibold text-white ">Order Questions</h1>
                        <dl className="space-y-6 divide-y divide-gray-400/20">
                            {FAQS.orderQuestions.map((faq) => (
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
                                    </div>
                                    </Disclosure.Panel>
                                </>
                                )}
                            </Disclosure>
                            ))}
                        </dl>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default support
import { RadioGroup, Disclosure } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeIcon, BadgeCheckIcon, SwitchHorizontalIcon, ChevronDownIcon } from '@heroicons/react/outline'
const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ]
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
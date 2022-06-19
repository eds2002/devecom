import { navigation } from "./footer.data"
import logo from '../../assets/BulaLogoWhite.svg'
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#000000] relative " aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className=" md:flex md:items-center">
              <div className = "relative flex items-center w-full h-full md:justify-start">
                <Link href = "/">
                  <Image src = {logo} width = {100} height = {50} priority className = "cursor-pointer" alt = "The official Bula Mic logo. A company dedicated to selling quality microphones."/>
                </Link>
              </div>
            </div>
            <p className="text-base text-[#94a1b2]">
              The last mic you&apos;ll ever need.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-indigo-600">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid col-span-2 gap-8 mt-12 sm:grid-cols-3" >
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-indigo-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-indigo-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-200 uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-400 hover:text-indigo-600">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8 mt-12 border-t border-gray-400/20">
          <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Bula, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
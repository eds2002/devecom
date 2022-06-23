import errorImg from '../assets/404image.svg'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function error(){
  return (
    <>
    <Head>
      <meta charSet='UTF-8'/>
      <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
      <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
      <title>Page Not Found - Bula</title>
      <meta name = "description" content = "Find Your Way On Our Store At Bulamics.com"/>
      <meta name = "keywords" content = 'BULA, MICROPHONE, PHONE, WIRELESS, BLUETOOTH'/>
      {/* Favicon */}
    </Head>
    <div className="relative flex items-center justify-center w-full h-full max-w-2xl mx-auto lg:max-w-7xl lg:px-8">
        <div className = "w-full h-full px-4 text-white">
          <div className = "h-[100vh] text-white text-5xl flex items-center justify-center flex-col font-bold w-full py-24">
            <Image src = {errorImg} priority alt = "Nothing to see here, move along. "/>
            <p className = "text-8xl">404</p>
            <p className = "text-2xl font-normal">Oops. Something went wrong</p>
            <Link href = "/">
                <a className = "bg-indigo-600 w-[100px] py-2 text-xs text-white text-center rounded-lg my-4 font-medium hover:bg-indigo-700">Go back</a>
            </Link>
          </div>
        </div>
    </div>
    </>
  )
}

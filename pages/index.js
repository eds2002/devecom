import {Announcement, Navigation,Hero, Features, Product, Promo, KeyFeatures, Testimonials,Footer} from '../components/index'
import Head from 'next/head'
import { storefront } from '../utils'
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ],
  bottomLinks: [
    { name: 'Accessibility', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}
export default function Home({products}) {
  return (
    <main className = "bg-[#16161a] h-[100vh]">
        <Head>
          <meta charSet='UTF-8'/>
          <meta name = 'viewport' content = 'width=device-width, initial-scale=1.0'/>
          <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>
          <title>Bula Microphone</title>
          <meta name = "description" contnet = "Bula Microphones are the new top of the line quality phone microphones."/>
          <meta name = "keywords" content = 'BULA, MICROPHONE, PHONE, WIRELESS, BLUETOOTH'/>
          {/* Favicon */}
        </Head>
        <Navigation active = "home"/>
        <Hero/>
        <KeyFeatures/>
        <Features/>
        <Promo/> 
        <Testimonials/>
        {/* <Footer/> */}
    </main>
  )
}

export async function getStaticProps(){
  const {data} = await storefront(productsQuery)
  return{
    props:{
      products:data.products
    }
  }
}


const gql = String.raw

const productsQuery = gql`
query Products {
	products(first:1) {
		edges {
      node {
        title
        handle
        tags
        priceRange{
          minVariantPrice{
            amount
					}
        }
        images(first:1){
          edges{
            node{
              transformedSrc
              altText
						}
					}
				}
			}
		}    
  }
}
`

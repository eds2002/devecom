import { GlobeIcon, BadgeCheckIcon } from '@heroicons/react/outline'
export const reviews = {
    average: 3.9,
    featured: [
      {
        id: 1,
        title: "Can't say enough good things",
        rating: 3,
        content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
        `,
        author: 'Risako M',
        date: 'May 16, 2022',
        datetime: '2022-01-06',
      },
      // More reviews...
    ],
} 


export const policies = [
    { 
      name: 'Worldwide shipping', 
      icon: GlobeIcon, 
      details:'Bula ships to nearly anywhere in the world! Shipping times may vary depending on location.',
    },
    { 
      name: 'Quality Guarantee', 
      icon: BadgeCheckIcon,
      details:'If you don\n love it return it within 14 days for a full refund. Simply contact us and we\'ll take care of you.'
    },
]

export const incentives = [
  {
    name: 'Easy to use',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]

export const features = [
  {
    name: 'All In One Solution',
    description:
      '<p>No longer carry excessive gears ever again. We offer the best <b>all-in-one</b> solution for <b>shooting high quality audio</b> at a low price!</p>',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Lightweight and Portable',
    description:
      '<p>Never carry heaving equipment again! Our microphones are <b>quick and easy</b> to setup with <b>bluetooth connection</b>.</p>',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'Exceptional Wireless System',
    description:
      '<p>Our rechargeable battery supports up to <b>10 hours of working time</b>.</p>',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

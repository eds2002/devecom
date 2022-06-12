import { GlobeIcon, BadgeCheckIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'
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
    { name: 'Worldwide shipping', icon: GlobeIcon},
    { name: '30 Day Warranty', icon: BadgeCheckIcon},
    { name: 'Free exchanges', icon: SwitchHorizontalIcon},
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
    name: 'Reusable rollers are the future',
    description:
      'Our pet hair roller is reusable with the self-cleaning design. Roll back and forth on the furniture surface to pick up pet hair, then open the lid and remove pet fur; the product is ready for use again without replacing the new one.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'One for all',
    description:
      'Lint can be anywhere. Our roller can be used on sofas, clothes, carpets, beds, and more. Please note, our roller was not intended for smooth surfaces.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
  {
    name: 'Easy to clean',
    description:
      'The lint has to go somewhere! We are happy to announce that our roller has a waste compartment. Once done with the roller, simply empty the compartment out and reuse when needed.',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

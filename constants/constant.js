import { GlobeIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import featureOne from '../assets/featureimage1.webp'
import featureTwo from '../assets/featureimage2.webp'
export const reviews = {
    average: 4.2,
    featured: [
      {
        id: 1,
        title: "For the price, you can't beat these mics!",
        rating: 4,
        content: `
        <p>I was skeptical of the audio quality these little mics would produce, but I decided to try them anyway. Boy, was I mistaken...both mics are crystal clear. I had an outdoor video shoot with these mics and a smartphone on a gimbal. It looked and sounded like the video was shot on much more expensive equipment.</p>
        `,
        author: 'Kevin L. Easterling',
        date: 'April 20, 2022',
      },
      {
        id: 2,
        title: "Cute microphone",
        rating: 3,
        content: `
        <p>there are two microphones. I brought this for taking videos. Acceptable sound quality and easy to use. Very convenient if you use it on a iPhone. Try to buy a transaction so I can use it on my computer.</p>
        `,
        author: 'Mia',
        date: 'June 3, 2022',
      },
      {
        id: 3,
        title: "Great product!",
        rating: 5,
        content: `
        <p>The sound quality is excellent with this wireless microphone. It is very easy to set up and use. It is also compact, making it super easy to take with you places!
        An awesome microphone for an awesome price! Highly recommend!</p>
        `,
        author: 'Anib',
        date: 'May 28, 2022',
      },
      {
        id: 4,
        title: "Easy and works well.",
        rating: 4,
        content: `
        <p>Used with Facebook Live to 'broadcast' youth hockey games. Works really well for play-by-play and color commentary. Seems like it gets about 60 foot range at the rink. Windscreen falls off a bit easily so I’ll have to glue that in place. Easy set up and it works well.</p>
        `,
        author: 'Austeeeen',
        date: 'May 28, 2022',
      },
      {
        id: 5,
        title: "Great quality",
        rating: 4,
        content: `
        <p>Both microphones connected to transmitter easily. Audio quality is great and this would be a good product for sound and video recordings.</p>
        `,
        author: 'Romer Guz',
        date: 'May 30, 2022',
      },
      {
        id: 6,
        title: "Great sound quality ",
        rating: 5,
        content: `
        <p>I have similar wireless microphone but my fiance wanted one for her iPhone that would do similar functionality. And she's been doing more recording with our marketing, this comes in handy as she did not want any bulky lavalier microphone that's wired so this wireless option what's the best choice. The wireless microphone can be clipped anywhere and it has a USBC charging port which comes with a cable that allows easy and fast charging..</p>
        <p>
        The bottom piece fits in the lightning port and iPhone seem to detect it right away I was able to record crystal clear audio!</p>
        `,
        author: 'Nabil',
        date: 'May 30, 2022',
      },
      {
        id: 7,
        title: "Perfect for on the go meetings",
        rating: 5,
        content: `
        <p>I do a lot of virtual meetings for work and I started to use my phone to dial into those meetings now. But one downside is my iPhone would pick up wind noises and car noises. This adapter helped solve that. I was able to clip it on my shirt while I drive or out at the park. It's nice to be able to get some fresh air during those boring meetings. I tried it with my wife and she said my voice came through clear and didn't get much background/wind noises. So I'm happy with these.</p>
        `,
        author: 'WillTheDude',
        date: 'May 30, 2022',
      },
      {
        id:8,
        title:"Dirrections for different model includes",
        rating:2,
        content: `
        <p>The instructions that came with this were for a different model because they didn't describe this product. We were able to connect the mic and it worked with my husband's iPhone, but did not work with mine. I am not sure why. I am updating my phone. If it does not work after that, I will have to return it.</p>
        `,
        author: 'Sarah',
        date: 'February, 2021',
      }
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
    name: 'Get rid of the bulk',
    description:
      '<p>No longer carry excessive gears ever again. We offer the best <b>all-in-one</b> solution for <b>shooting high quality audio</b>.</p>',
    imageSrc: featureOne,
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Lightweight and Portable',
    description:
      '<p>Never carry heaving equipment again. Our microphones are <b>quick and easy</b> to setup with <b>bluetooth connection</b>.</p>',
    imageSrc: featureTwo,
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

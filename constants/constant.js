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

export const Docs = [
    {
      TOS: `
        <h3>OVERVIEW</h3><br/>
        <p>This website is operated by Bula. Throughout the site, the terms “we”, “us” and “our” refer to Bula. Bula offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>

        <p>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.</p>

        <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>

        <p>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>

        <p>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you.</p>

        <br/><h1>SECTION 1 - ONLINE STORE TERMS</h1>
        <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
        You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
        You must not transmit any worms or viruses or any code of a destructive nature.
        A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>

        <br/><h1>SECTION 2 - GENERAL CONDITIONS</h1>
        <p>We reserve the right to refuse Service to anyone for any reason at any time.
        You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
        You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.
        The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>

        <br/><h1>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h1>
        <p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
        This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>

        <br/><h1>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h1>
        <p>Prices for our products are subject to change without notice.
        We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
        We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>

        <br/><h1>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</h1>
        <p>Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Refund Policy: [LINK TO REFUND POLICY]
        We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
        We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited.
        We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>

        <br/><h1>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</h1>
        <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.<p>

        <p>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>

        <p>For more details, please review our Refund Policy: [LINK TO REFUND POLICY]</p>

        <br/><h1>SECTION 7 - OPTIONAL TOOLS</h1>
        <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.
        You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.
        Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).
        We may also, in the future, offer new Services and/or features through the website (including the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.</p>

        <br/><h1>SECTION 8 - THIRD-PARTY LINKS</h1>
        <p>Certain content, products and Services available via our Service may include materials from third-parties.
        Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties.
        We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>

        <br/><h1>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h1>
        <p>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us, you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
        We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.
        You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>

        <br/><h1>SECTION 10 - PERSONAL INFORMATION</h1>
        <p>Your submission of personal information through the store is governed by our Privacy Policy, which can be viewed here: [LINK TO PRIVACY POLICY]<p>

        <br/><h1>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</h1
        <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).
        We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>

        <br/><h1>SECTION 12 - PROHIBITED USES</h1>
        <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>

        <br/><h1>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h1>
        <p>We do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free.
        We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.
        You agree that from time to time we may remove the Service for indefinite periods of time or cancel the Service at any time, without notice to you.
        You expressly agree that your use of, or inability to use, the Service is at your sole risk. The Service and all products and Services delivered to you through the Service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
        In no case shall Bula, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, Service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the Service or any products procured using the Service, or for any other claim related in any way to your use of the Service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the Service or any content (or product) posted, transmitted, or otherwise made available via the Service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>

        <br/><h1>SECTION 14 - INDEMNIFICATION</h1>
        <p>You agree to indemnify, defend and hold harmless Bula and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, Service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.<p>

        <br/><h1>SECTION 15 - SEVERABILITY</h1>
        <p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>

        <br/><h1>SECTION 16 - TERMINATION</h1>
        <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
        These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
        If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>

        <br/><h1>SECTION 17 - ENTIRE AGREEMENT</h1>
        <p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
        These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitutes the entire agreement and understanding between you and us and governs your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
        Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>

        <br/><h1>SECTION 18 - GOVERNING LAW</h1>
        <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United States.<p>

        <br/><h1>SECTION 19 - CHANGES TO TERMS OF SERVICE</h1>
        <p>You can review the most current version of the Terms of Service at any time at this page.
        We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>

        <br/><h1>SECTION 20 - CONTACT INFORMATION</h1>
        <p>Questions about the Terms of Service should be sent to us at help@bula.com.
        Our contact information is posted below:</p>

        <br/><p>help@bula.com</p>`
    },
    {
      privacyPolicy:
        `This Privacy Policy describes how bulamics.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
        <br/><br/>Contact
        <br/>After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by e-mail at help@bula.com.
        Collecting Personal Information
        When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information about an identifiable individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.
        <ul>
          <li><u>Device information</u>/<li>
          <ul>
            <li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
            <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels [ADD OR SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED].</li>
            <li>Disclosure for a business purpose: shared with our processor Shopify [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION].</li>
            <li>Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site [ADD OR SUBTRACT ANY OTHER PERSONAL INFORMATION COLLECTED].</li>
          </ul>
          <li>Order information</li>
          <ul>
            <li>Purpose of collection: to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            <li>Source of collection: collected from you.</li>
            <li>Disclosure for a business purpose: shared with our processor Shopify [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION. FOR EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND FULFILLMENT APPS].</li>
            <li>Personal Information collected: name, billing address, shipping address, payment information (including credit card numbers [INSERT ANY OTHER PAYMENT TYPES ACCEPTED]), email address, and phone number.</li>
          </ul>
          <li>Customer support information</li>
          <ul>
            <li>Purpose of collection:</li>
            <li>Source of collection:</li>
            <li>Disclosure for a business purpose:</li>
            <li>Personal Information collected: [INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]</li>
            <li>Purpose of collection: to provide customer support.</li>
            <li>Source of collection: collected from you</li>
            <li>Disclosure for a business purpose: [ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]</li>
            <li>Personal Information collected: </li>
          </ul>
        </ul>`
    }
]

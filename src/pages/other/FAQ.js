import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const FAQ = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="FAQ"
        description="It consists of all the frqeuently asked questions for Shukra Jewellars"
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "FAQ", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-12 mx-auto">
            <h1 class="text-2xl font-semibold text-gray-800 lg:text-3xl">
              Frequently asked questions.
            </h1>

            <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What materials are used in your jewellery?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We use high-quality materials such as sterling silver, 14k
                    and 18k gold, and ethically sourced gemstones.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Are your products hypoallergenic?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Yes, our jewellery is hypoallergenic and safe for sensitive
                    skin.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    How do I care for and clean my jewellery?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We recommend using a mild soap and water solution with a
                    soft brush. Avoid harsh chemicals and store your jewellery
                    in a dry place.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Do you offer custom or personalized jewellery?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Absolutely! We offer custom designs and personalization
                    services. Contact our team for details.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What is the warranty or guarantee on your jewellery?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We provide a [X]-year warranty against manufacturing
                    defects. Please refer to our warranty policy for more
                    details.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Can I request a specific ring size or necklace length?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Certainly! You can select your preferred size and length
                    when placing an order.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Where is your jewellery made?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Our jewellery is crafted with precision and care in our
                    workshop [location].
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What sets your brand apart from others?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We pride ourselves on combining timeless design, exceptional
                    craftsmanship, and ethically sourced materials to create
                    unique and meaningful pieces.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Do you offer international shipping?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Yes, we offer international shipping. Shipping costs and
                    delivery times may vary.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What is the return policy?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Our return policy allows for returns within [X] days of
                    purchase. Please review our full policy on our website for
                    details.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Are your diamonds and gemstones ethically sourced?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Yes, we are committed to ethical sourcing practices, and our
                    diamonds and gemstones adhere to strict ethical standards.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    How do I find my ring size?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    You can find our ring size guide on our website to help you
                    determine the correct size.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Can I modify an existing design to suit my preferences?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Absolutely! Contact our customer service team to discuss
                    customization options.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Do you offer engraving services?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Yes, we provide engraving services to add a personal touch
                    to your jewellery.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What is the average production time for custom orders?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Custom orders typically take [X] weeks for production. Exact
                    timelines will be provided upon order confirmation.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Are your products nickel-free?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Yes, our products are nickel-free and designed with the
                    comfort of our customers in mind.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Do you have a physical store, or is it online-only?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We have a [physical store location], and our products are
                    also available for purchase online.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    How can I track my order?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Once your order is shipped, you will receive a tracking
                    number via email to monitor the status of your delivery.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What payment methods do you accept?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We accept various payment methods, including credit/debit
                    cards, PayPal, and [other payment methods]. Details are
                    available during the checkout process.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    Can I purchase a gift card for your store?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Yes, gift cards are available for purchase on our website.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What is imitation jewelry?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Imitation jewelry, also known as fashion jewelry or costume
                    jewelry, refers to jewelry pieces made from non-precious
                    materials, designed to mimic the appearance of fine jewelry.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    How do I care for my imitation jewelry purchased from your
                    website?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    To maintain the beauty of your imitation jewelry, we
                    recommend avoiding exposure to moisture, chemicals, and
                    direct sunlight. Clean gently with a soft cloth and store in
                    a cool, dry place when not in use.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What sets your imitation jewelry apart from others?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    Our imitation jewelry stands out for its exceptional
                    craftsmanship, attention to detail, and affordable prices.
                    We strive to offer trendy and timeless designs that cater to
                    diverse tastes and preferences.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    What is your return and exchange policy?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    We want you to be completely satisfied with your purchase.
                    If for any reason you're not happy with your imitation
                    jewelry, you can return it within 24 hours for a full refund
                    or exchange.
                  </p>
                </div>
              </div>
              <div>
                <div class="inline-block p-3 text-gray-800 bg-gray-300 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div>
                  <h1 class="text-xl font-semibold text-gray-700">
                    How can I contact customer support for assistance?
                  </h1>

                  <p class="mt-2 text-sm text-gray-500 ">
                    If you have any questions, concerns, or feedback regarding
                    your imitation jewelry purchase or shopping experience,
                    please don't hesitate to contact our friendly customer
                    support team. You can reach us via email, phone, during
                    business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutOne>
    </Fragment>
  );
};

export default FAQ;

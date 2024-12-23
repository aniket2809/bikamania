import React, {useState} from 'react'
import Navbar from './Navbar'
import FAQVideo from "../assets/FAQPage.mp4";
import FAQThumbnail from "../assets/FAQPageTumbnail.png"
import Footer from "./Footer.jsx";
import Gallery from "../assets/FAQs.png";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData1 = [          //General FAQ
    {
      question: "What is PupHub?",
      answer: "PupHub is a free online platform that connects dog owners with certified creche owners, providing convenient and safe boarding services for your furry friend."
    },
    {
      question: "Is PupHub free to use?",
      answer: "Yes, PupHub is currently free to use for both dog owners and creche owners."
    },
    {
      question: "How do I contact PupHub support?",
      answer: "You can contact our support team by phone at +918918080399 or by email at apexiumtechnologies@gmail.com. Visit our Contacts Page for more details"
    },
  ];
  const faqData2 = [          //Dog Owner FAQ
    {
      question: "How do I book a creche for my dog?",
      answer: "Create an account on PupHub. Search for available creches in your area. Select a creche, review its details, and book a slot."
    },
    {
      question: "What information do I need to provide when booking a creche?",
      answer: "You will need to provide your dog's breed, age, weight, vaccination records, and any specific care instructions."
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, you can cancel your booking through the app. Please note that cancellation policies may vary by creche."
    },
    {
      question: "How do I pay for the boarding service?",
      answer: "As of now, PupHub is a free platform. Payment for boarding services is directly made to the creche owner."
    }
  ];
  const faqData3 = [          //Creche Owner FAQ
    {
      question: "How do I register my creche on PupHub?",
      answer: "Provide your creche details, including address, contact information, and services offered. Upload photos of your creche and dog care facilities."
    },
    {
      question: "How do I manage bookings and cancellations?",
      answer: "You can manage bookings and cancellations through the PupHub app."
    },
    {
      question: "How do I get paid for boarding services?",
      answer: "Currently in PupHub we only accepts cash, but in the near future we will be adding banking details for the convinience of both Customer and Merchant"
    },
  ];
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <div>
      <video
          className="w-[100vw] h-[50vh] sm:h-[80vh] object-fill"
          src={FAQVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={FAQThumbnail}
        />
        <img
          src={Gallery}
          className="animate-fade-in delay-100 absolute top-[40%] sm:top-2/3 left-1/3 transform- translate-x-1/3 -translate-y-1/2 w-1/4"
          alt="Gallery Text"
        />
        </div>
        <div className=" flex justify-center">
        <p className=" text-center sm:text-justify text-2xl max-w-4xl text-white mt-10 m-5 ">
        Welcome to our FAQ page! Here, we answer all your questions about dog care, boarding, training, and more. Whether you're a new dog owner or looking for expert tips, browse through our frequently asked questions to find the information you need to keep your pet happy, healthy, and safe.
        </p>
        {/* <p className=" text-center sm:text-justify text-2xl max-w-4xl mb-10 text-white mt-10 m-5 ">
        Find answers to common questions about dog care, boarding, and keeping your pet happy and healthy.
        </p> */}
        </div>
        <div className="p-8 max-w-4xl mx-auto space-y-4">
        <div className='mb-10 space-y-4'>
        <p className=" text-center sm:text-justify text-2xl max-w-4xl text-white mt-10 m-5 ">
        General FAQs
        </p>
        {faqData1.map((faq, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full p-4 text-lg font-semibold focus:outline-none"
            >
              {faq.question}
              <span className="text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        </div>
        <div className='mb-20 space-y-4'>
        <p className=" text-center sm:text-justify text-2xl max-w-4xl text-white mt-10 m-5 ">
        Dog Owner FAQs
        </p>
        {faqData2.map((faq, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full p-4 text-lg font-semibold focus:outline-none"
            >
              {faq.question}
              <span className="text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
            
          </div>
        ))}
        </div>
        <div className='mb-20 space-y-4'>
         <p className=" text-center sm:text-justify text-2xl max-w-4xl text-white mt-10 m-5 ">
         Creche Owner FAQs
        </p>
        {faqData3.map((faq, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full p-4 text-lg font-semibold focus:outline-none"
            >
              {faq.question}
              <span className="text-gray-500">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
            
          </div>
        ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FAQPage
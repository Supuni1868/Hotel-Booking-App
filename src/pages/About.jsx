import React, { useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import maldivesImage from '../assets/maldivesHotel1.jpg';

const About = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a hotel on QuickStay?",
      answer: "Simply search for your desired destination, select your check-in and check-out dates, browse available hotels, and complete your booking with our secure payment system."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify your booking depending on the hotel's cancellation policy. Please check the specific terms during booking or contact our support team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. All transactions are secured with industry-standard encryption."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our customer support team is available 24/7 to assist you with any questions or concerns. You can reach us via email at info@quickstay.com or call us at +0123456789."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in complete transparency. All fees and taxes are clearly displayed before you complete your booking. What you see is what you pay."
    },
    {
      question: "How do I become a hotel owner on QuickStay?",
      answer: "Click on the 'Dashboard' button in the navigation menu to access the hotel owner portal. You can register your property, add room details, and start receiving bookings."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      {/* About Section with Background Image */}
      <div className="relative w-full flex flex-col items-center justify-center py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Full Background for About section */}
        <img src={maldivesImage} alt="Hotel Background" className="absolute inset-0 w-full h-full object-cover z-0" style={{objectPosition:'center'}} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl">
          <div className="text-black mb-12">
            <Title title="About QuickStay" subTitle="Discover our story, mission, and values. Learn why travelers choose QuickStay for luxury and comfort." align="center" />
          </div>
          <div className="relative w-full flex items-center justify-center mt-8">
            {/* Grid layout 2 rows x 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl">
              <div className="bg-blue-100/90 border-2 border-black rounded-xl shadow-lg p-6 text-gray-800 text-base animate-fade-in" style={{animationDelay:'0.8s'}}>
                Redefining hotel booking with luxury, comfort, and personalized service.
              </div>
              <div className="bg-blue-100/90 border-2 border-black rounded-xl shadow-lg p-6 text-gray-800 text-base animate-fade-in" style={{animationDelay:'1.6s'}}>
                Handpicked destinations and exclusive offers for every traveler.
              </div>
              <div className="bg-blue-100/90 border-2 border-black rounded-xl shadow-lg p-6 text-gray-800 text-base animate-fade-in" style={{animationDelay:'2.4s'}}>
                Exceptional customer support and seamless travel experience.
              </div>
              <div className="bg-blue-100/90 border-2 border-black rounded-xl shadow-lg p-6 text-gray-800 text-base animate-fade-in" style={{animationDelay:'3.2s'}}>
                Trusted by thousands of satisfied guests and hotel owners.
              </div>
              <div className="bg-blue-100/90 border-2 border-black rounded-xl shadow-lg p-6 text-gray-800 text-base animate-fade-in" style={{animationDelay:'4s'}}>
                Transparency, trust, and value at the heart of everything we do.
              </div>
              <div className="bg-blue-100/90 border-2 border-black rounded-xl shadow-lg p-6 text-gray-800 text-base animate-fade-in" style={{animationDelay:'4.8s'}}>
                Your journey to extraordinary stays begins with QuickStay.
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .animate-fade-in { animation: fallDown 0.8s ease forwards; opacity: 0; }
          @keyframes fallDown { from { opacity: 0; transform: translateY(-100px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </div>

      {/* FAQ Section - Separate from background */}
      <div className="w-full bg-white py-16 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <Title title="Frequently Asked Questions" subTitle="Find answers to common questions about QuickStay" align="center" />
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-blue-100/90 rounded-xl shadow-lg overflow-hidden border-2 border-black">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-200/50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <span className={`text-2xl text-black transition-transform duration-300 ${openFaqIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-6 py-4 text-gray-700 bg-blue-50/80 border-t-2 border-black">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

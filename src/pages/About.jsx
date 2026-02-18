import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import maldivesImage from '../assets/maldivesHotel1.jpg';

const About = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Full Background for entire About page content */}
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
  );
};

export default About;

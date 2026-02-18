import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center">
      <Title title="Contact Us" subTitle="We'd love to hear from you! Reach out for any questions, feedback, or partnership opportunities." align="center" />
      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
        <img src={assets.regImage} alt="Contact" className="w-80 rounded-xl shadow-lg mb-8 md:mb-0" />
        <div className="flex flex-col gap-4 max-w-md">
          <p className="text-lg text-gray-700">Email: <span className="font-medium">info@quickstay.com</span></p>
          <p className="text-lg text-gray-700">Phone: <span className="font-medium">+0123456789</span></p>
          <p className="text-lg text-gray-700">Address: <span className="font-medium">Main Road 123 Street, 23 Colony, New York</span></p>
          <form className="mt-6 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border border-gray-300 rounded px-3 py-2 outline-indigo-500" required />
            <input type="email" placeholder="Your Email" className="border border-gray-300 rounded px-3 py-2 outline-indigo-500" required />
            <textarea placeholder="Your Message" className="border border-gray-300 rounded px-3 py-2 outline-indigo-500" rows={4} required />
            <button className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 rounded cursor-pointer mt-2">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

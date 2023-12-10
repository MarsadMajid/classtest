// pages/contact.js
import React from 'react';
import Navbar from '../(components)/Navbar';

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-900">
      <div className="bg-white p-8 rounded-md shadow-md w-full mb-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-3 w-full border rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-3 w-full border rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mt-1 p-3 w-full border rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      </div>

      <div className="flex-grow bg-white p-8 rounded-md shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4">Our Locations</h2>

        {/* Location 1 */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Location 1</h3>
          <p>123 Main Street, Cityville</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Location 2 */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Location 2</h3>
          <p>456 Broad Avenue, Townsville</p>
          <p>Phone: (987) 654-3210</p>
        </div>

        {/* Map (Placeholder) */}
        <div className="bg-gray-200 h-40 rounded-md mb-4">
          {/* Add your map integration here */}
          {/* For example, you can use Google Maps or Mapbox */}
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.095770001256!2d-0.12812038414527178!3d51.50797087963762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU3JzE4LjAiTiAwwrA1OCcxMC41Ilc!5e0!3m2!1sen!2suk!4v1594649790846!5m2!1sen!2suk"
          ></iframe>
        </div>
      </div>
      
    </div>
    
    </>
  );
};

export default ContactPage;

'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../(components)/Navbar';

export default function doctorPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    problemDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className="relative flex pb-4 mx-auto flex-col bg-clip-border rounded-2xl my-16 bg-slate-100 dark:bg-slate-400 text-gray-700 shadow-md w-full max-w-7xl sm:flex-row">
        <div className="relative  m-0 overflow-hidden text-gray-700  shrink-0">
          <Image
            width={400}
            height={400}
            src={"/usman-yousaf-pTrhfmj2jDA-unsplash.jpg"}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h6 className="block  text-5xl font-bold mb-4 font-sans antialiased  leading-relaxed tracking-normal text-gray-700 uppercase">
            Join our weekly digest
          </h6>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Get exclusive promotions & updates straight to your inbox.
          </h4>
          <form onSubmit={handleSubmit} className="w-full max-w-md mt-2">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border dark:border-black rounded-md out focus:outline-none dark:focus:border-white focus:border-black transition duration-300"
              placeholder="Your Name"
              required
            />

            <label htmlFor="age" className="block mt-4 text-gray-600 text-sm font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border dark:border-black rounded-md out focus:outline-none dark:focus:border-white focus:border-black transition duration-300"
              placeholder="Your Age"
              required
            />

            <label htmlFor="problemDescription" className="block mt-4 text-gray-600 text-sm font-medium mb-2">
              Problem Description
            </label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border dark:border-black rounded-md out focus:outline-none dark:focus:border-white focus:border-black transition duration-300"
              placeholder="Describe your problem..."
              required
            />

            <button
              type="submit"
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// components/AppointmentForm.js
"use client"
import React from 'react';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [date, setDate] = useState('');
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        Book an Appointment
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          name="email"
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)} 
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">
          Doctor's Specialty
        </label>
        <select
          id="specialty"
          name="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)} 
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          required
        >
          <option value="" disabled selected>
            Select the doctor's specialty
          </option>
          <option value="cardiology">Cardiology</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="dermatology">Dermatology</option>
          {/* Add more specialties as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Preferred Appointment Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} 
          className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      >
        Schedule Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;

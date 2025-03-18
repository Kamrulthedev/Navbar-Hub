import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Get in Touch</h1>
      <p className="text-lg mb-6 text-center max-w-lg">
        Have any questions or feedback? Feel free to contact us using the form below or reach us through our contact details.
      </p>
      
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div className="mt-8 space-y-4 text-center bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-blue-600">Contact Information</h2>
        <p className="flex items-center justify-center space-x-2 text-gray-700"><FaPhoneAlt /> <span>+880 123 456 789</span></p>
        <p className="flex items-center justify-center space-x-2 text-gray-700"><FaEnvelope /> <span>support@navberhub.com</span></p>
        <p className="flex items-center justify-center space-x-2 text-gray-700"><FaMapMarkerAlt /> <span>Dhaka, Bangladesh</span></p>
        <p className="flex items-center justify-center space-x-2 text-gray-700"><FaClock /> <span>Office Hours: Mon-Fri, 9:00 AM - 6:00 PM</span></p>
      </div>
    </div>
  );
};

export default Contact;
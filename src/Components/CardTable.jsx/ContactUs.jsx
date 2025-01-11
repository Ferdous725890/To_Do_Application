import React from "react";

const ContactUs = () => {
  return (
    <div className="border border-[#aa95c9] bg-white/10 rounded-lg text-white p-8 mb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section: Feedback Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-300">
            Please use the feedback form to get in touch with us if you have
            any inquiries or requests. Within a few hours, the administrator
            will respond to your inquiry.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name..."
                className="w-full p-2 rounded-md bg-white/10 bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email..."
                className="w-full p-2 bg-white/10 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Write Here..."
                className="w-full p-2 rounded-md bg-white/10 bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-white/10 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Information</h3>
          <p className="text-gray-300 mb-6">
            We are always eager to hear from you and assist with any inquiries
            or concerns you may have. Please feel free to reach out to us
            through any of the following means:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6h16.5M4.5 6v12M19.5 6v12M3.75 18h16.5"
                  />
                </svg>
              </span>
              <p>(123) 123-456</p>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 11a7 7"
                  />
                </svg>
              </span>
              <p>08 W 36th St, New York, NY 10001</p>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 6h15M4.5 18h15M4.5 6v12M19.5 6v12"
                  />
                </svg>
              </span>
              <p>Office@rentify.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

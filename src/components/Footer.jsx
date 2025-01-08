import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h1 className="text-xl font-bold">e-Shop</h1>
          <p className="mt-2">
            Your one-stop for all your needs. Shop with us and experience the best online shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <div className="flex flex-col gap-2 mt-2">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/shop">Shop</Link>
            <Link className="hover:underline" to="/contact">Contact</Link>
            <Link className="hover:underline" to="/about">About</Link>
          </div>
        </div>

        {/* Follow Us & Subscription */}
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Follow Us</h1>
          <div className="flex gap-4">
            <FaFacebook title="Facebook" className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram title="Instagram" className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter title="Twitter" className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube title="YouTube" className="hover:text-red-500 cursor-pointer" />
          </div>
          <div className="flex">
            <input
              className="flex-grow border border-gray-600 bg-transparent rounded-l-xl px-4 py-2 text-white outline-none"
              placeholder="Enter Your Email"
              type="email"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-xl hover:bg-red-700">
              Submit
            </button>
          </div>
        </div>
      </div>

      <hr className="container mx-auto px-4 md:px-16 lg:px-24 border-gray-700 my-4" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 flex justify-between items-center flex-wrap">
        <p>&copy; {new Date().getFullYear()} e-Shop. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link className="hover:underline" to="/privacy-policy">Privacy Policy</Link>
          <Link className="hover:underline" to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

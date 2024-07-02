import React from "react";

const Footer = () => {
  return (
    <div className="py-8 bg-gray-800 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">Company</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Support</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="mb-1">123 E-commerce St.</p>
          <p className="mb-1">City, State 12345</p>
          <p className="mb-1">Email: info@ecommerce.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

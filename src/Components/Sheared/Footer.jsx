// Footer.jsx

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

/**
 * Footer Component
 *
 * This component renders the footer section of the website, including
 * company information and social media links. It is fully responsive
 * and accessible, utilizing Tailwind CSS for styling with a white background.
 */
const Footer = () => {
  // Array of social media platforms with their respective icons and links
  const socialMedia = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "https://www.twitter.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com",
    },
  ];

  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Social Media Links */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Company Logo */}
           
            {/* Copyright */}
            <p>© {new Date().getFullYear()} - All rights reserved</p>
          </div>

          {/* Social Media Links */}
          <nav className="flex space-x-4">
            {socialMedia.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform.name}
                className="text-gray-500 hover:text-primary transition-colors duration-200"
              >
                <span className="sr-only">{platform.name}</span>
                {platform.icon}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Additional Links */}
        <div className="mt-8 border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Navigation Links */}
            <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Additional Information */}
            <p className="mt-4 md:mt-0 text-sm text-gray-400 text-center md:text-left">
              Built with ❤️ by the Relief Tracker Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

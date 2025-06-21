import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaUserAstronaut,
  FaLink,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
} from "react-icons/fa";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <footer
      className={`${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
          : "bg-gray-100 text-gray-800 border-t border-gray-300 shadow-inner"
      } py-14 px-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaUserAstronaut /> About Me
          </h3>
          <p
            className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
          >
            Helping businesses grow online with modern web experiences and clean
            design.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/lihasahil"
              className="hover:scale-110 transition"
              target="_blank"
            >
              <FaGithub className="text-xl hover:text-blue-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-shrestha-b46887319/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <FaLinkedinIn className="text-xl hover:text-blue-500" />
            </a>
            <a
              href="https://www.facebook.com/sahil.shrestha.677985/"
              target="_blank"
              className="hover:scale-110 transition"
            >
              <FaFacebook className="text-xl hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaLink /> Quick Links
          </h3>
          <ul
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-sm space-y-2`}
          >
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaEnvelope /> Contact
          </h3>
          <ul
            className={`${
              isDark ? "text-gray-400" : "text-gray-600"
            } text-sm space-y-2`}
          >
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              sahilshrestha106@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              Balkumari, Lalitpur
            </li>
            <li className="flex items-start gap-2">
              <FaPhone className="mt-1" />
              +977-9869376638
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-5">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaPaperPlane /> Newsletter
          </h3>
          <p
            className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm`}
          >
            Subscribe for updates, blogs, and more!
          </p>
          <form
            className={`p-3 rounded-xl flex items-center gap-2 ${
              isDark
                ? "bg-white/10 backdrop-blur-md"
                : "bg-white border border-gray-300"
            }`}
          >
            <input
              type="email"
              placeholder="Your email"
              className={`bg-transparent w-full text-sm outline-none ${
                isDark
                  ? "text-white placeholder:text-gray-300"
                  : "text-gray-800 placeholder:text-gray-400"
              }`}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded text-white transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center ${
          isDark
            ? "border-t border-gray-700 text-gray-400"
            : "border-t border-gray-300 text-gray-600"
        }`}
      >
        <p>
          &copy; {new Date().getFullYear()} Sahil Shrestha. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-blue-500">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-blue-500">
            Terms
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

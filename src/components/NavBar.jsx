import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } shadow-md fixed w-full top-0 left-0 z-10 transition duration-300`}
    >
      <div className="flex justify-between items-center h-16 px-4">
        <div className="flex items-center space-x-7">
          <Link to="/" className="flex items-center py-4 px-2">
            <span className="font-semibold text-lg">Portfolio</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 ml-12">
            <Link
              to="/"
              className={`nav-link px-3 py-2 rounded-md ${
                isActive("/") ? "bg-blue-500 text-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link px-3 py-2 rounded-md ${
                isActive("/about") ? "bg-blue-500 text-white" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/project"
              className={`nav-link px-3 py-2 rounded-md ${
                isActive("/project") ? "bg-blue-500 text-white" : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`nav-link px-3 py-2 rounded-md ${
                isActive("/contact") ? "bg-blue-500 text-white" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-xl hover:text-blue-500 transition"
            title="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <div className="hidden md:flex items-center">
            <Link
              to="/hire-me"
              className="px-3 py-2 border-2 rounded-md text-sm font-medium hover:text-white hover:bg-black transition duration-300"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:text-blue-500 hover:bg-gray-100 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden px-4 pt-2 pb-4 space-y-1 ${
            isDark ? "bg-gray-900 text-white" : "bg-white"
          } shadow-lg`}
        >
          <Link
            to="/"
            className={`mobile-link block px-3 py-2 rounded-md ${
              isActive("/") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`mobile-link block px-3 py-2 rounded-md ${
              isActive("/about") ? "bg-blue-500 text-white" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/project"
            className={`mobile-link block px-3 py-2 rounded-md ${
              isActive("/project") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`mobile-link block px-3 py-2 rounded-md ${
              isActive("/contact") ? "bg-blue-500 text-white" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

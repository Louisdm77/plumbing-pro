import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-serif font-bold tracking-tight hover:text-gray-200 transition"
        >
          Plumbing Pro
        </Link>

        {/* Hamburger Button (Visible on Mobile) */}
        <button
          className="md:hidden text-3xl focus:outline-none hover:text-indigo-400 transition"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            to="/booking"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            Book Now
          </Link>
          <Link
            to="/enquiry"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            Enquiry
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when toggled) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-900 px-6 py-4 w-full shadow-lg`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/booking"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
          <Link
            to="/enquiry"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Enquiry
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium tracking-wide hover:text-indigo-400 transition duration-300 ease-in-out"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-emerald-600 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-semibold">Employee Management System</div>

      <div className="relative">
        {/* Button to toggle dropdown */}
        <button 
          onClick={toggleDropdown} 
          className="flex items-center gap-2 text-lg font-medium hover:bg-emerald-700 py-2 px-4 rounded-lg "
        >
          Contact Info
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-5 h-5 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 text rounded-lg shadow-lg z-10">
            <ul> 
              <li>
                <a 
                  href="mailto:shashank@example.com"
                  className="block px-4 py-2 text-sm text-black overflow-auto hover:bg-emerald-100 rounded-lg"
                >
                  Email: shashankbhargava111@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/shashank-bhargava17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-black hover:bg-emerald-100 rounded-lg"
                >
                  LinkedIn: Shashank
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/shashank1703/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-black hover:bg-emerald-100 rounded-lg"
                >
                  GitHub: Shashank
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

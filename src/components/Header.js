import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="w-full flex justify-end p-4 text-sm text-gray-700 dark:text-white">
      <div className="flex items-center space-x-4">
        <a href="https://mail.google.com" className="hover:underline">
          Gmail
        </a>
        <a href="https://images.google.com" className="hover:underline">
          Images
        </a>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:shadow transition duration-300"
          title="Toggle dark mode"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-600" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;

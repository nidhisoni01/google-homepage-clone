import React from "react";

function Footer() {
  return (
    <footer className="w-full mt-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4 text-sm text-gray-600 dark:text-gray-300">
      <div className="flex flex-wrap justify-center space-x-6">
        <a href="#" className="hover:underline">
          Advertising
        </a>
        <a href="#" className="hover:underline">
          Business
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Settings
        </a>
      </div>
    </footer>
  );
}

export default Footer;

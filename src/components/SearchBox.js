import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SearchBox() {
  return (
    <div className="flex flex-col items-center mt-24 w-full max-w-[90%] sm:max-w-xl">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="Google"
        className="w-64 mb-6"
      />

      <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md bg-white dark:bg-gray-800 dark:text-white">
        <FaSearch className="text-gray-500 mr-3" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="flex-grow outline-none text-sm bg-white dark:bg-gray-800 dark:text-white"
        />
        <FaMicrophone className="text-blue-500 mx-2 cursor-pointer" />
        <FcGoogle className="text-xl cursor-pointer" />
      </div>

      <div className="mt-8 flex space-x-4 flex-wrap justify-center">
        <button className="bg-gray-100 px-4 py-2 rounded hover:shadow dark:bg-gray-700 dark:text-white">
          Google Search
        </button>
        <button className="bg-gray-100 px-4 py-2 rounded hover:shadow dark:bg-gray-700 dark:text-white">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
}

export default SearchBox;

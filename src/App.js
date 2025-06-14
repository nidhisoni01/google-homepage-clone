import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center bg-cover bg-center bg-no-repeat backdrop-blur-sm bg-[url('https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1740&q=80')] dark:bg-gray-900 transition-colors duration-300">

      {/* Top Navbar */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-col flex-grow items-center justify-center px-4 sm:px-8 w-full">
        <SearchBox />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

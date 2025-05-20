import React, { useState } from 'react';
import { Globe, ChevronDown, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [language, setLanguage] = useState('English');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-blue-600">CHoug</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition">Home</a>
          <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition">Activities</a>
          <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition">About Us</a>
          <a href="#" className="font-medium text-gray-800 hover:text-blue-600 transition">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <Globe size={18} className="mr-1" />
              {language}
              <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
              <button onClick={() => setLanguage('English')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">English</button>
              <button onClick={() => setLanguage('Hebrew')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Hebrew</button>
              <button onClick={() => setLanguage('French')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">French</button>
            </div>
          </div>
          <button className="hidden md:block bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition">Sign Up as Instructor</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">Sign Up as Parent</button>
          <button className="md:hidden">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

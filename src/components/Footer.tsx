import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} ד"ר חנה שמואלביץ - כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
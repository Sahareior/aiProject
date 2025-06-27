import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 text-sm py-4 text-center border-t">
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </footer>
  );
};

export default Footer;

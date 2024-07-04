import React from 'react';
import './Hero.css'; // Ensure to import the CSS file

const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] p-12 mx-auto flex flex-col items-center justify-center text-center'>
      <p className='text-gray-600 mt-4'>
        Built with <span className='heart'>❤️</span> by Vrushali Haldankar
      </p>
    </div>
  );
};

export default Footer;

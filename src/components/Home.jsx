//import React from 'react';
import React, { useEffect, useState } from 'react';
import heroimage from '../assets/ProfilePic.jpg';
import logo from '../assets/logo.png';
import GlobeComponent from './GlobeComponent'; // Ensure to import the GlobeComponent
import { TypeAnimation } from 'react-type-animation';
import './Hero.css'; // Ensure to import the CSS file

const Hero = () => {
  // Adjust the CV path relative to your project structure
  const cvPath = '/assets/Vrushali_Haldankar.pdf';

  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'
      id='home'
    >
      <div className='col-span-1 my-auto mx-auto flip-container'>
        <div className='flipper'>
          {/* Front of the flipper */}
          <div className='front bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover shadow-lg flex items-center justify-center'>
            <div className='text-white text-2xl font-bold flex flex-col items-center'>
              <span>&lt;Code&gt;</span>
              <span>&lt;Innovate/&gt;</span>
              <span>&lt;Create/&gt;</span>
            </div>
          </div>

          {/* Back of the flipper */}
          <div className='back rounded-full w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover shadow-lg bg-gradient-to-br from-orange-500 to-pink-500'>
            <img
              src={heroimage}
              alt='hero image'
              className='cartoon-image rounded-full w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      <div className='col-span-2 px-5 my-auto'>
        <h2 className='text-white text-2xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='primary-color'>I'm a</span>
          <br />
          <TypeAnimation
            sequence={['Frontend Dev', 1000, 'Full-Stack Dev', 1000]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <div className='my-8'>
          {/* Download CV button */}
          <a
            href={cvPath}
            download='Vrushali_Haldankar.pdf'
            className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white transition-transform duration-300 hover:scale-110'
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

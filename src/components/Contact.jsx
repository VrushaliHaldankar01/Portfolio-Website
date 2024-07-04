import React from 'react';
import './Hero.css'; // Ensure to import the CSS file

const Contact = () => {
  return (
    <div className='max-w-[900px] mx-auto bg-black sm:py-12 p-6' id='contact'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight text-white'>
          Contact Me
        </h2>
      </div>

      <div className='max-w-[700px] mx-auto mt-8 bg-[#161616] rounded-xl py-8'>
        <div className='p-8 text-center'>
          <a
            href='https://www.linkedin.com/in/vrushali-haldankar-149a631a0/'
            target='_blank'
            rel='noopener noreferrer'
            className='custom-button m-2 inline-block text-lg'
          >
            LinkedIn
          </a>
          <br />
          <a
            href='mailto:vrushalihaldankar01@gmail.com'
            className='custom-button m-2 inline-block text-lg'
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

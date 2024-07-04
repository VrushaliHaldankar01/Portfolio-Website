import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex '>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
              Hey there ! I'm Vrushali Haldankar a passionate full-stack
              developer who thrives on using technology to inspire creativity.
              With a degree in computer science and practical experience in
              software development, I bring a unique blend of abilities and
              knowledge to every project. Currently, I'm dedicated to supporting
              the advancement of women in technology as a volunteer full-stack
              developer at Women IT Teleworkers. I'm driven by challenges and
              always eager to explore new opportunities in the dynamic world of
              technology. I'm ready to take on the exciting challenges in the
              software engineering field.
            </p>
          </div>
        </div>

        <img
          className='mx-auto rounded-3xl py-8 md:py-0'
          src={aboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;

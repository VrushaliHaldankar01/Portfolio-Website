import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import volunteerImg from '../assets/volunteer.png';

const Volunteering = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='volunteering'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='relative overflow-hidden group'>
          <img
            className='mx-auto rounded-3xl py-8 md:py-0'
            src={volunteerImg}
            width={400}
            height={400} // Increase height here
            alt='Volunteering Image'
          />
          <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-90 transition-opacity duration-300'>
            <a
              href='https://github.com/JULIERAJ/KIDS-FIRST-v2'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white text-center rounded-lg p-2 bg-gray-800 hover:bg-gray-600 transition-colors duration-300'
            >
              <FontAwesomeIcon icon={faGithub} size='2x' />
              <span className='block mt-1'>View on GitHub</span>
            </a>
          </div>
        </div>
        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>
              Kids First App
            </h2>
            <p className='text-base lg:text-lg'>
              Volunteer Full-stack Developer at Women IT Teleworkers, actively
              contributing to the development of the KIDS FIRST application, a
              co-parenting web app designed to assist separated parents in
              coordinating schedules for their children, facilitating
              communication on important decisions, and sharing essential
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;

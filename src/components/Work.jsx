import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

const Work = () => {
  const projects = [
    {
      image: proj1,
      link: 'https://github.com/VrushaliHaldankar01/TinDog-Start-master',
    },
    {
      image: proj2,
      link: 'https://github.com/VrushaliHaldankar01/React-Keeper-App',
    },
    {
      image: proj3,
      link: 'https://github.com/VrushaliHaldankar01/React-To-Do-App',
    },
    {
      image: proj4,
      link: 'https://github.com/VrushaliHaldankar01/Express-Daily-Journal',
    },
    {
      image: proj5,
      link: 'https://github.com/VrushaliHaldankar01/DriveTest',
    },
    {
      image: proj6,
      link: 'https://github.com/VrushaliHaldankar01/Employee_Management_System',
    },
  ];

  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
        <p className='text-gray-400'>Check out some of my recent Projects</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='transform  transition-transform duration-300 hover:scale-105 overflow-hidden
              shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
              mx-auto content-div h-[200px] bg-cover relative'
          >
            <img
              src={project.image}
              layout='fill'
              objectFit='cover'
              alt={`Project ${index + 1}`}
            />
            <div
              className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col
              justify-center items-center'
            >
              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button
                    className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700
                      font-bold text-lg'
                  >
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

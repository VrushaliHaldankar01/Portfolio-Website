import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import mysql from '../assets/mysql.png';
import react from '../assets/react.png';
import node from '../assets/node.png'; // Add the paths for the new skills
import git from '../assets/git.png';
import mongodb from '../assets/mongodb.png';

const Skills = () => {
  return (
    <div className='border-grey-600 bg-black text-gray-400 max-w-[1200px] mx-auto p-4'>
      <h2 className='text-4xl md:text-5xl font-bold m-4 text-center text-white'>
        Tech Stack
      </h2>
      <br />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center'>
        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={html} alt='HTML' />
          <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={css} alt='CSS' />
          <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={javascript} alt='Javascript' />
          <p className='mt-2'>Javascript</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={mysql} alt='Mysql' />
          <p className='mt-2'>Mysql</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={react} alt='React' />
          <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={node} alt='Node.js' />
          <p className='mt-2'>Node.js</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={git} alt='Git' />
          <p className='mt-2'>Git</p>
        </div>

        <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px]'>
          <img src={mongodb} alt='MongoDB' />
          <p className='mt-2'>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

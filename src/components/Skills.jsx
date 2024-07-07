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
        <SkillCard image={html} title='HTML' />
        <SkillCard image={css} title='CSS' />
        <SkillCard image={javascript} title='Javascript' />
        <SkillCard image={mysql} title='Mysql' />
        <SkillCard image={react} title='React' />
        <SkillCard image={node} title='Node.js' />
        <SkillCard image={git} title='Git' />
        <SkillCard image={mongodb} title='MongoDB' />
      </div>
    </div>
  );
};

const SkillCard = ({ image, title }) => {
  return (
    <div className='flex flex-col items-center m-4 w-[80px] md:w-[100px] hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out'>
      <img src={image} alt={title} />
      <p className='mt-2'>{title}</p>
    </div>
  );
};

export default Skills;

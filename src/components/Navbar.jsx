import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css'; // Ensure to import the CSS file

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary-color ml-4'>
        Vrushali Haldankar
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-5'>
          <a href='#about' className='nav-link'>
            About
          </a>
        </li>
        <li className='p-5'>
          <a href='#work' className='nav-link'>
            Projects
          </a>
        </li>
        <li className='p-5'>
          <a href='#volunteering' className='nav-link'>
            Volunteering
          </a>
        </li>
        <li className='p-5'>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </li>
      </ul>

      <div className='bg-black h-[100px]'>
        <div onClick={handleNav} className='block md:hidden mr-6'>
          {!nav ? <AiOutlineMenu size={20} /> : null}
        </div>

        <div
          className={
            nav
              ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <div className='flex justify-end items-center md:hidden p-4'>
            {nav ? (
              <div onClick={handleNav} className='mr-4'>
                <AiOutlineClose size={20} />
              </div>
            ) : null}
          </div>
          <h1 className='text-3xl primary-color m-4'>Vrushali Haldankar</h1>
          <ul className='p-8 text-2xl'>
            <li className='p-2'>
              <a href='#home' className='nav-link'>
                Home
              </a>
            </li>
            <li className='p-2'>
              <a href='#about' className='nav-link'>
                About
              </a>
            </li>
            <li className='p-2'>
              <a href='#work' className='nav-link'>
                Work
              </a>
            </li>
            <li className='p-2'>
              <a href='#volunteering' className='nav-link'>
                Volunteering
              </a>
            </li>
            <li className='p-2'>
              <a href='#contact' className='nav-link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

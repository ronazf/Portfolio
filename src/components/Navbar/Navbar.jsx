import React, { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuItems = ['home', 'about', 'projects', 'skills'];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {menuItems.map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
            <div />
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiOutlineMenu onClick={() => { setToggle(true) }} />
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              exit={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: '0' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <HiX onClick={() => { setToggle(false) }} />
              <ul>
                {menuItems.map((item) => (
                  <li key={`menu-${item}`}>
                    <a href={`#${item}`} onClick={() => { setToggle(false) }}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar
import React from 'react';
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail, BiLogoPostgresql } from "react-icons/bi";
import { FcAndroidOs } from "react-icons/fc";
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        initial={{ opacity: 0, x: '-100%' }}
        exit={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div className='p-text'>
              <p className='header-text'>Ronaz Farahmand</p>
              <div className='app__header-intro'>
                <p>
                  Hey there! I’m Ronaz, a student passionate about software development,
                  with proficiency in a wide range of languages such as SQL, C++, Rust, Java
                  and experience in mobile and web development.
                </p>
              </div>
            </div>
            <ul className='app__header-contact'>
              <li className='app__flex' key='gmailLogo'>
                <a href='mailto:ronazfarahmand1@gmail.com' target='_blank' rel='noopener noreferrer'>
                  <IconContext.Provider value={{ color: '#c71610', className: 'global-class-name' }}>
                    <div>
                      <BiLogoGmail />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
              <li className='app__flex' key={'githubLogo'}>
                <a href='https://github.com/ronazf' target='_blank' rel='noopener noreferrer'>
                  <IconContext.Provider value={{ color: 'black', className: 'global-class-name' }}>
                    <div>
                      <AiFillGithub />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
              <li className='app__flex' key={'linkedinLogo'}>
                <a href='https://www.linkedin.com/in/ronazfarahmand' target='_blank' rel='noopener noreferrer'>
                  <IconContext.Provider value={{ color: '#0077b5', className: 'global-class-name' }}>
                    <div>
                      <AiFillLinkedin />
                    </div>
                  </IconContext.Provider>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <div className='app__header-skill'>
        <IconContext.Provider value={{ color: '#0064a5', className: 'global-class-name' }}>
          <div>
            <BiLogoPostgresql />
          </div>
        </IconContext.Provider>
        <div>
          <FcAndroidOs />
        </div>
        <div>
          <img src={images.tensorflow} alt="tensorflow" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        exit={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className='app__header-info'
      >
        <div className='app__header-profile'>
          <img src={images.profile} alt="profile" />
        </div>
      </motion.div>
    </div>
  )
}

export default Header
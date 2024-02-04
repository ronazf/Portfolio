import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        exit={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span></span>
              <div>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Name, Last name</h1>
              </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
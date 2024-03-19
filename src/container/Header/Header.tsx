import React, { FC } from 'react';
import { IconContext } from "react-icons";
import { BiLogoPostgresql, BiLogoReact } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";

import { FcAndroidOs } from "react-icons/fc";
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import './Header.scss';

const Header: FC = () => {
  const turnScale = 1.15;
  const turnRotate = 360;
  const turnMotionTransition = {
    duration: 1
  };
  const turnMotionVarients = (rotateDirection: number = 1) => ({
    transformation: {
      scale: turnScale,
      rotate: rotateDirection * turnRotate,
    }
  });

  const shakeScale = 1.15;
  const shakeRotate = [0, -10, 10, -10, 0];
  const shakeMotionTransition = {
    duration: 1
  };
  const shakeMotionVarients = {
    transformation: {
      scale: shakeScale,
      rotate: shakeRotate,
    }
  };
  return (
    <div id='home' className='app__header app__flex'>
      <div className='app__header-intro'>
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          exit={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <div className='p-text app__header-info'>
            <p className='header-text'>Ronaz <span>Farahmand</span></p>
            <p className='title-text'>Software Engineer</p>
          </div>
        </motion.div>
        <div className='app__header-homescreen'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            exit={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <div className='app__header-homebackground'>
              <images.Homepage />
            </div>
          </motion.div>
        </div>
        <div className='app__header-sticker'>
          <motion.div className='p-text app__header-welcome'>
            <div className='app__header-box'>
              <motion.div
                variants={shakeMotionVarients}
                whileHover='transformation'
                whileTap='transformation'
                transition={shakeMotionTransition}
              >
                <p className='emoji'>👋</p>
              </motion.div>
              <div>
                <p>Hi there,
                  <br />
                  <span>I'm </span>
                  <span className='bold-text'>Ronaz</span>
                </p>
              </div>
            </div>
          </motion.div>
          <div className='p-text app__header-experience'>
            <div className='app__header-box'>
              <p>
                <span>I have experience in:</span>
                <br />
                <span className='bold-text'>Mobile </span><span>Development</span>
                <br />
                <span className='bold-text'>Web </span><span>Development</span>
              </p>
            </div>
            <div id='interest' className='app__header-box'>
              <p>
                <span>I'm interested in:</span>
                <br />
                <span className='bold-text'>Machine Learning</span>
              </p>
            </div>
          </div>
          <div className='app__header-skill'>
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              exit={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className='app__header-skill-detail'
              id='left'
            >
              <motion.div
                variants={turnMotionVarients()}
                whileHover='transformation'
                whileTap='transformation'
                transition={turnMotionTransition}
                className='app__icon'
              >
                <IconContext.Provider value={{ className: 'app__header-gear' }}>
                  <FaGear id='gear' />
                </IconContext.Provider>
                <FcAndroidOs className='app__header-gear-middle' />
              </motion.div>
              <IconContext.Provider value={{ color: '#0064a5' }}>
                <motion.div
                  variants={turnMotionVarients(-1)}
                  whileHover='transformation'
                  whileTap='transformation'
                  transition={turnMotionTransition}
                  className='app__icon'
                >
                  <IconContext.Provider value={{ className: 'app__header-gear app__header-gear-tertiary' }}>
                    <FaGear id='gear' />
                  </IconContext.Provider>
                  <BiLogoPostgresql className='app__header-gear-middle app__header-icon-tertiary' />
                </motion.div>
              </IconContext.Provider>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              exit={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className='app__header-skill-detail'
              id='right'
            >
              <IconContext.Provider value={{ color: '#61dbfb' }}>
                <motion.div
                  variants={turnMotionVarients(1)}
                  whileHover='transformation'
                  whileTap='transformation'
                  transition={turnMotionTransition}
                  className='app__icon'
                >
                  <IconContext.Provider value={{ className: 'app__header-gear' }}>
                    <FaGear id='gear' />
                  </IconContext.Provider>
                  <BiLogoReact className='app__header-gear-middle' />
                </motion.div>
              </IconContext.Provider>
              <motion.div
                variants={turnMotionVarients(-1)}
                whileHover='transformation'
                whileTap='transformation'
                transition={turnMotionTransition}
                className='app__icon'
              >
                <IconContext.Provider value={{ className: 'app__header-gear app__header-gear-tertiary' }}>
                  <FaGear id='gear' />
                </IconContext.Provider>
                <img src={images.tensorflow} alt='tensorflow' className='app__header-gear-middle app__header-icon-tertiary' />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(Header, 'home')
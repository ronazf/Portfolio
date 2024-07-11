import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss'

const stepCount: number = 60;
const journey: React.JSX.Element[] = []

const GenerateLoopShape = (startCount: number, count: number, amplitude: number) => {
  const loop: React.JSX.Element[] = []
  for (let i = 0; i < count; i++) {
    const angle = (i) * 4 * Math.PI;
    const margin = amplitude * Math.sin(angle + 2);
    const slantRadians = 90 * (Math.PI / 180);
    //if (i < count / 2) {
    const x = 4.0 * Math.cos(angle);
    const y = 8.0 * Math.sin(angle);
    const xSlanted = x * Math.cos(slantRadians) - y * Math.sin(slantRadians);
    const ySlanted = x * Math.sin(slantRadians) + y * Math.cos(slantRadians);
    loop.push(<div className='app__about-step' style={{ 'position': 'absolute', 'transform': `translate(${xSlanted}rem, ${ySlanted}rem)` }}></div>)
    //} else {
    //loop.push(<div className='app__about-step' style={{ 'margin-bottom': `${margin}rem`, 'margin-left': `${Math.abs(count - i)}rem` }}></div>)
    //}
  }

  return loop;
}

for (let i = 0; i < stepCount; i++) {
  const margin = 10 * Math.sin(2 * Math.PI * 2 * (i / (stepCount - 1)) + (Math.PI / 2));

  if (i % 15 == 0 || i == stepCount - 1) {
    journey.push(
      <div className='app__about-milestone' style={{ 'margin-bottom': `${margin}rem` }}>
        <img src={images.marker} alt="Mark Milestone" />
      </div>
    )
    continue;
  }

  journey.push(<div className='app__about-step' style={{ 'margin-bottom': `${margin}rem` }}></div>)

}

const About = () => {
  return (
    <section id='about' className='app__about app__flex'>
      <div className='app__about-overview'>
        <div className='app__about-img'>
          <img src={images.about} alt="Ronaz Farahmand" />
        </div>
        <div className='app__about-intro'>
          <div className='tertiary-text app__about-intro-name'>
            <p>I’m Ronaz</p>
          </div>
          <div className='app__about-intro-desc secondary-text'>
            <p>
              A problem solver with a deep passion for finding solutions through code.
              Over the last 4 years, I've had the opportunity to work on a variety of technologies,
              gaining experience in database programming, Android and iOS development, Wi-Fi development,
              Web development and machine learning.
            </p>
            <p>
              Through this journey, I hope to be able to explore, learn and grow, both personally and professionally.
              My end goal is and has always been, creating products that can help make a positive impact on the everyday lives of people.
            </p>
          </div>
        </div>
      </div>
      <div className='app__about-journey'>
        {/*journey*/}
      </div>
    </section>
  )
}

export default About
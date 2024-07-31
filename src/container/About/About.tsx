import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Object3D } from 'three';

import './About.scss'
import Sphere from '../../components/Geometry/Sphere';
import { Model } from '../../components';
import { View } from '@react-three/drei';

type Object3D = typeof Object3D;

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

  const meshRef = useRef();
  const shape = <Sphere meshRef={meshRef} />
  const cameraControlModel = useRef<Object3D>(null);
  const model = useRef(new THREE.Group());
  const [modelRotation, setModelRotation] = useState(0);

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
      <div className='app__about-experience'>
        <div className='app__about-experience-box' id='education'>
          <div className='app__about-experience-logo'>
            <img src={images.uw} alt="logo" />
          </div>
          <div className='app__about-experience-intro'>
            <p>Bachelors of Computer Science</p>
            <p>Sep 2020 - Jun 2025</p>
          </div>
          <div className='app__about-experience-lang'>
            <p>Racket | C | C++ | Java | Python | PyTorch</p>
          </div>
          <div className='app__about-experience-desc'>
            <ul>
              <li>
                <p>
                  Object-Oriented Programming
                </p>
              </li>
              <li>
                <p>
                  Data structures and Algorithms
                </p>
              </li>
              <li>
                <p>
                  Introduction to Machine Learning
                </p>
              </li>
              <li>
                <p>
                  User Interfaces and HCI
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='app__about-experience-box' id='sdc'>
          <div className='app__about-experience-logo'>
            <img src={images.sdc} alt="logo" />
          </div>
          <div className='app__about-experience-intro'>
            <p>Software Developer Intern</p>
            <p>Sep 2021 - Apr 2022</p>
          </div>
          <div className='app__about-experience-lang'>
            <p>PL/SQL | SQLite | Oracle | Java | XML</p>
          </div>
          <div className='app__about-experience-desc'>
            <ul>
              <li>
                <p>
                  Created and edited database routines, Apex 5, Apex 4.2, and Oracle Forms applications
                </p>
              </li>
              <li>
                <p>
                  Optimized database Queries
                </p>
              </li>
              <li>
                <p>
                  Developed an order tracking Android Mobile App from an Oracle Apex application,
                  with the ability to synchronize thousands of rows of data between a local room database
                  and an Oracle database in less than 15 seconds
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='app__about-experience-box' id='geotab'>
          <div className='app__about-experience-logo'>
            <img src={images.geotab} alt="logo" />
          </div>
          <div className='app__about-experience-intro'>
            <p>Mobile Developer Intern</p>
            <p>May 2022 - Aug 2022</p>
          </div>
          <div className='app__about-experience-lang'>
            <p>Kotlin | Jetpack Compose | Swift | Swift UI</p>
          </div>
          <div className='app__about-experience-desc'>
            <ul>
              <li>
                <p>
                  Used Bluetooth GATTE Service to enhance connectivity and improve connection stability
                </p>
              </li>
              <li>
                <p>
                  Implemented file uploading mechanisms in Android WebView, enabling users to upload documents to the app
                </p>
              </li>
              <li>
                <p>
                  Used Sentry to enhance error-tracking and performance monitoring capabilities
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className='app__about-experience-box' id='ford'>
          <div className='app__about-experience-logo'>
            <img src={images.ford} alt="logo" />
          </div>
          <div className='app__about-experience-intro'>
            <p>Wi-Fi Software Developer Intern</p>
            <p>Jan 2023 - Apr 2023</p>
          </div>
          <div className='app__about-experience-lang'>
            <p>C | C++</p>
          </div>
          <div className='app__about-experience-desc'>
            <ul>
              <li>
                <p>
                  Enhanced diagnostic logs to identify the underlying cause of unexpected network disconnections
                </p>
              </li>
              <li>
                <p>
                  Executed troubleshooting of deadlocks, memory leaks and segmentation faults in a large C++ codebase
                </p>
              </li>
              <li>
                <p>
                  Used data structures to optimize code, enhance readability, and reduce code coupling
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
import React, { FC, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { info } from '../../types';
import './Header.scss';
import { AnimatedText } from '../../types/AnimatedText';
import * as THREE from 'three';
import { Object3D } from 'three';
import { Canvas, extend } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { Model } from '../../components';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import FBOParticles from '../../components/Geometry/FBOParticles';

const Header: FC = () => {
  extend({ TextGeometry })
  type Object3D = typeof Object3D;
  const personalInfo = info.personalInfo;
  const role = info.role;
  const roleLastIndex = role.fields.length - 1;
  const filedSeperator = ' . ';
  const animatedRoles: [string, string?][] = [];
  role.fields.forEach((field, index) => {
    const modifiedField = field + (index !== roleLastIndex ? filedSeperator : '');
    animatedRoles.push([modifiedField]);
  });

  const points = useRef();
  const simulationMaterialRef = useRef();

  const shape = <FBOParticles points={points} simulationMaterialRef={simulationMaterialRef} />

  const cameraControlModel = useRef<Object3D>(null);

  const model = useRef(new THREE.Group());

  const [_, setModelRotation] = useState(0);

  return (
    <section id='home' className='app__header app__flex'>
      <div className='app__header-3d'>
        <Model
          groupRef={model}
          controlRef={cameraControlModel}
          setRotationState={setModelRotation}
          shape={shape}
        />
        <div className='app__header-3d-div'>
          <Canvas eventSource={document.getElementById('root')}>
            <View.Port />
          </Canvas>
        </div>
      </div>
      <div className='p-text app__header-info'>
        <p className='header-text app__header-first-name secondary-text'>{personalInfo.firstName}</p>
        <p className='header-lower-text tertiary-text app__header-last-name'>{personalInfo.lastName}</p>
        <motion.p className='title-text secondary-text'>{role.name}</motion.p>
        <div>
          <AnimatedText element='span' textClass={animatedRoles} className='p-large-text secondary-text' />
        </div>
      </div>
    </section >
  )
}

export default AppWrap(Header, 'home')
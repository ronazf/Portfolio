import React, { FC, useRef} from 'react';

import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { info } from '../../types';
import './Home.scss';
import { AnimatedText } from '../../types/AnimatedText';
import * as THREE from 'three';
import { Object3D } from 'three';
import { Canvas, extend } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { Model } from '../../components';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import FBOParticles from '../../components/Geometry/FBOParticles';

const Home: FC = () => {
  extend({ TextGeometry })
  type Object3D = typeof Object3D;
  const personalInfo = info.personalInfo;
  const role = info.role;
  const roleLastIndex = role.fields.length - 1;
  const fieldSeperator = ' . ';
  const animatedRoles: [string, string?][] = [];
  role.fields.forEach((field, index) => {
    const modifiedField = field + (index !== roleLastIndex ? fieldSeperator : '');
    animatedRoles.push([modifiedField]);
  });

  const points = useRef();
  const simulationMaterialRef = useRef();

  const shape = <FBOParticles points={points} simulationMaterialRef={simulationMaterialRef} />

  const cameraControlModel = useRef<Object3D>(null);

  const model = useRef(new THREE.Group());

  return (
    <section className='app__home app__flex'>
      <div className='app__home-3d'>
        <Model
          groupRef={model}
          controlRef={cameraControlModel}
          shape={shape}
        />
        <div className='shape-3d'>
          <Canvas eventSource={document.getElementById('root')}>
            <View.Port />
          </Canvas>
        </div>
      </div>
      <div className='p-text app__home-info'>
        <p className='header-text app__home-first-name secondary-text'>{personalInfo.firstName}</p>
        <p className='header-lower-text tertiary-text app__home-last-name'>{personalInfo.lastName}</p>
        <motion.p className='title-text secondary-text'>{role.name}</motion.p>
        <div>
          <AnimatedText element='span' textClass={animatedRoles} className='p-large-text secondary-text' />
        </div>
      </div>
    </section >
  )
}

export default AppWrap(Home, 'home')
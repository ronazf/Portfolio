import React, { MutableRefObject } from 'react';
import * as THREE from 'three';
import { Environment } from '@react-three/drei'
import { images } from '../../constants';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

type SphereProps = {
    meshRef: MutableRefObject<any>
};

const Sphere = ({ meshRef }: SphereProps) => {
    const options = {
        enableSwoopingCamera: false,
        enableRotation: true,
        transmission: 1,
        thickness: 1.2,
        roughness: 0.05,
        envMapIntensity: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        normalScale: 1,
        clearcoatNormalScale: 0.3,
        normalRepeat: 1,
        bloomThreshold: 0.85,
        bloomStrength: 0.5,
        bloomRadius: 0.33
    };
    const renderer = new THREE.WebGLRenderer({
        antialias: false
      });
      renderer.setClearColor(0x1f1e1c, 1);
    const hdrEquirect = new RGBELoader().load(
        images.hdr,
        () => {
            hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
        }
    );
    const textureLoader = new THREE.TextureLoader();
    const uwTexture = textureLoader.load(images.uw);
    const normalMapTexture = textureLoader.load(images.normal);
    normalMapTexture.wrapS = THREE.RepeatWrapping;
    normalMapTexture.wrapT = THREE.RepeatWrapping;
    normalMapTexture.repeat.set(options.normalRepeat, options.normalRepeat);

    const material = new THREE.MeshPhysicalMaterial({
        transmission: options.transmission,
        thickness: options.thickness,
        roughness: options.roughness,
        envMap: hdrEquirect,
        envMapIntensity: options.envMapIntensity,
        clearcoat: options.clearcoat,
        clearcoatRoughness: options.clearcoatRoughness,
        normalScale: new THREE.Vector2(options.normalScale),
        normalMap: normalMapTexture,
        clearcoatNormalMap: normalMapTexture,
        clearcoatNormalScale: new THREE.Vector2(options.clearcoatNormalScale)
    });

    return (
        <mesh
            ref={meshRef}
        >
            <Environment files={images.hdr} />
            <icosahedronGeometry args={[0.5, 15]} />
            <meshPhysicalMaterial map={uwTexture} transmission={options.transmission} thickness={options.thickness} roughness={options.roughness}
            envMapIntensity={options.envMapIntensity} clearcoat={options.clearcoat} clearcoatRoughness={options.clearcoatRoughness} 
            normalScale={new THREE.Vector2(options.normalScale)} normalMap={normalMapTexture} clearcoatNormalMap={normalMapTexture} 
            clearcoatNormalScale={new THREE.Vector2(options.clearcoatNormalScale)}/>
        </mesh>
    )
};

export default Sphere;
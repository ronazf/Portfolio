import React from 'react';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

type SceneProps = {
    shape: React.JSX.Element
};

const Scene = ({shape}: SceneProps) => {
    return (
        <Canvas className = "shape-3d" camera={{ position: [1.5, 1.5, 2.5] }}>
            <PerspectiveCamera />
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <OrbitControls
                makeDefault
                autoRotate={true}
                enableDamping={false}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
            />
            <ambientLight intensity={0.5} />
            {shape}
        </Canvas>
    );
};

export default Scene;
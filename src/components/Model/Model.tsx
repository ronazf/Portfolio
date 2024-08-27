import React, { Dispatch, MutableRefObject, SetStateAction, Suspense } from 'react';
import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './Model.scss';

type ModelProps = {
    groupRef: MutableRefObject<any>,
    controlRef: MutableRefObject<any>,
    shape: React.JSX.Element
};

const Model = ({
    groupRef,
    controlRef,
    shape
}: ModelProps) => {
    return (
        <View
            className='app__model'
        >
            <PerspectiveCamera />
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <OrbitControls
                makeDefault
                ref={controlRef}
                autoRotate={true}
                enableDamping={false}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
            />
            <group ref={groupRef} position={[0, 0, 0]}>
                <Suspense>
                    {shape}
                </Suspense>
            </group>
        </View>
    )
}

export default Model
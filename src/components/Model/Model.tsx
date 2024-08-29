import React, { MutableRefObject, Suspense } from 'react';
import { View, OrthographicCamera, OrbitControls } from '@react-three/drei';
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
            <OrthographicCamera
                makeDefault
                position={[0, 0, 5]}
                zoom={150}
            />
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.5} />
            <group ref={groupRef} position={[0, 0, 0]}>
                <Suspense>
                    {shape}
                </Suspense>
            </group>
        </View>
    )
}

export default Model
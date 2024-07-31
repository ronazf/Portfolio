import React, { Dispatch, MutableRefObject, SetStateAction, Suspense } from 'react';
import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import './Model.scss';

type ModelProps = {
    groupRef: MutableRefObject<any>,
    controlRef: MutableRefObject<any>,
    setRotationState: Dispatch<SetStateAction<number>>,
    shape: React.JSX.Element,
    index: number,
    id: string
};

const Model = ({
    groupRef,
    controlRef,
    setRotationState,
    shape,
    index,
    id
}: ModelProps) => {
    return (
        <View
            index={index}
            id={id}
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
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />
            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0, 0]}>
                <Suspense>
                    {shape}
                </Suspense>
            </group>
        </View>
    )
}

export default Model
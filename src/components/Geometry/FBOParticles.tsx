import React, { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { useFBO, OrthographicCamera } from "@react-three/drei";
import { useFrame, extend, createPortal, Canvas } from "@react-three/fiber";
import * as THREE from 'three';
import SimulationMaterial from './SimulationMaterial';
// eslint-disable-next-line import/no-webpack-loader-syntax
import fragmentShader from "!!raw-loader!../../assets/fragmentShader.glsl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import vertexShader from "!!raw-loader!../../assets/vertexShader.glsl";
import './scene.scss';

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = () => {
    const points: React.MutableRefObject<any> = useRef();
    const simulationMaterialRef: React.MutableRefObject<any> = useRef();

    const getSize = () => {
        if (window.innerWidth <= 767) {
            return 150
        } else if (window.innerWidth <= 1024) {
            return 250
        } else {
            return 350
        }
    };

    const [size, setSize] = useState<number>(getSize())

    const scene = useMemo(() => {
        return new THREE.Scene()
    }, []);
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
    const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]);
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

    const renderTarget = useFBO(size, size, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: false,
        type: THREE.FloatType,
    });

    const particlesPosition = useMemo(() => {
        const length = size * size;
        const particles = new Float32Array(length * 3);
        for (let i = 0; i < length; i++) {
            let i3 = i * 3;
            particles[i3 + 0] = (i % size) / size;
            particles[i3 + 1] = i / size / size;
        }
        return particles;
    }, [size]);

    const uniforms = useMemo(() => ({
        uPositions: {
            value: null,
        }
    }), [])

    useFrame((state: any) => {
        const { gl, clock } = state;

        gl.setRenderTarget(renderTarget);
        gl.clear();
        gl.render(scene, camera);
        gl.setRenderTarget(null);

        points.current.material.uniforms.uPositions.value = renderTarget.texture;
        simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    });

    return (
        <group className='app__model'>
            {createPortal(
                <mesh>
                    <simulationMaterial ref={simulationMaterialRef} args={[size]} />
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={positions.length / 3}
                            array={positions}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="attributes-uv"
                            count={uvs.length / 2}
                            array={uvs}
                            itemSize={2}
                        />
                    </bufferGeometry>
                </mesh>,
                scene
            )}
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlesPosition.length / 3}
                        array={particlesPosition}
                        itemSize={3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />
            </points>
        </group>
    );
};

const Scene = () => {
    return (
        <Canvas>
            <OrthographicCamera
                makeDefault
                position={[0, 0, 5]}
                zoom={150}
            />
            <ambientLight intensity={0.5} />
            <FBOParticles />
        </Canvas>
    );
};

export default Scene;
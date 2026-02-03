import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, RoundedBox, Torus, Cylinder, Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const LockModel = ({ state }) => {
    const shackleRef = useRef();
    const bodyRef = useRef();
    const groupRef = useRef();

    // Neon Colors
    const colors = {
        locked: new THREE.Color('#00f0ff'), // Cyan
        unlocked: new THREE.Color('#0aff00'), // Green
        completed: new THREE.Color('#ffd700'), // Gold
    };

    const currentColor = state === 'locked' ? colors.locked : (state === 'completed' ? colors.completed : colors.unlocked);

    useFrame((state, delta) => {
        // Auto-rotation
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2; // Slow rotation
        }

        // Animation logic
        if (shackleRef.current) {
            // Unlock animation: Move up and rotate
            const targetY = (state === 'unlocked' || state === 'completed') ? 1.5 : 0.6;
            const targetRot = (state === 'unlocked' || state === 'completed') ? Math.PI / 4 : 0;

            shackleRef.current.position.y = THREE.MathUtils.lerp(shackleRef.current.position.y, targetY, delta * 2);
            shackleRef.current.rotation.y = THREE.MathUtils.lerp(shackleRef.current.rotation.y, targetRot, delta * 2);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Shackle */}
            <group position={[0, 0.6, 0]} ref={shackleRef}>
                <Torus args={[1, 0.25, 16, 32, Math.PI]} position={[0, 0, 0]}>
                    <meshStandardMaterial
                        color={currentColor}
                        emissive={currentColor}
                        emissiveIntensity={2}
                        roughness={0.1}
                        metalness={1}
                    />
                </Torus>
                <Cylinder args={[0.25, 0.25, 1]} position={[-1, -0.5, 0]}>
                    <meshStandardMaterial
                        color={currentColor}
                        emissive={currentColor}
                        emissiveIntensity={2}
                        roughness={0.1}
                        metalness={1}
                    />
                </Cylinder>
                <Cylinder args={[0.25, 0.25, 0.4]} position={[1, -0.2, 0]}>
                    <meshStandardMaterial
                        color={currentColor}
                        emissive={currentColor}
                        emissiveIntensity={2}
                        roughness={0.1}
                        metalness={1}
                    />
                </Cylinder>
            </group>

            {/* Body */}
            <group position={[0, -0.8, 0]} ref={bodyRef}>
                <RoundedBox args={[2.5, 2, 1]} radius={0.2} smoothness={4}>
                    <meshPhysicalMaterial
                        color="#0f1629"
                        roughness={0.2}
                        metalness={0.8}
                        clearcoat={1}
                        transparent
                        opacity={0.9}
                    />
                </RoundedBox>

                {/* Neon Border/Detail */}
                <RoundedBox args={[2.55, 2.05, 0.9]} radius={0.2} smoothness={4}>
                    <meshBasicMaterial color={currentColor} wireframe />
                </RoundedBox>

                {/* Keyhole */}
                <Cylinder args={[0.3, 0.3, 0.1]} position={[0, 0, 0.51]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#000" />
                </Cylinder>
                <Cylinder args={[0.1, 0.1, 0.4]} position={[0, -0.2, 0.51]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#000" />
                </Cylinder>
            </group>
        </group>
    );
};

const LockAnimation = ({ state = 'locked' }) => {
    return (
        <div className="w-full h-[300px] md:h-[500px] relative">
            <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, -10, -10]} intensity={0.5} />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <LockModel state={state} />
                </Float>

                <Environment preset="city" />
                <ContactShadows position={[0, -3, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color={state === 'completed' ? '#ffd700' : '#00f0ff'} />

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default LockAnimation;

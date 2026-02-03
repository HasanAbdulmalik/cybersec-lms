import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 100 }) => {
    const mesh = useRef();
    const { viewport, mouse } = useThree();

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const factor = 20 + Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = (Math.random() - 0.5) * viewport.width * 2;
            const y = (Math.random() - 0.5) * viewport.height * 2;
            const z = (Math.random() - 0.5) * 10;
            temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 });
        }
        return temp;
    }, [count, viewport]);

    useFrame((state) => {
        // Mouse influence (Ripple/Repulsion)
        // Convert normalized mouse (-1 to 1) to world coords
        const mouseX = (mouse.x * viewport.width) / 2;
        const mouseY = (mouse.y * viewport.height) / 2;

        particles.forEach((particle, i) => {
            let { t, factor, speed, x, y, z } = particle;

            // Update time
            t = particle.t += speed / 2;
            const a = Math.cos(t) + Math.sin(t * 1) / 10;
            const b = Math.sin(t) + Math.cos(t * 2) / 10;
            const s = Math.cos(t);

            // Basic movement
            particle.mx += (mouseX - particle.mx) * 0.02;
            particle.my += (mouseY - particle.my) * 0.02;

            // Distance from mouse
            const dx = mouseX - x;
            const dy = mouseY - y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Ripple/Repulsion effect
            if (dist < 4) {
                const angle = Math.atan2(dy, dx);
                const force = (4 - dist) * 0.1;
                x -= Math.cos(angle) * force;
                y -= Math.sin(angle) * force;
            }

            // Update dummy object
            dummy.position.set(
                x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                z
            );

            // Scale based on "breathing"
            const scale = (s + 2) / 3; // 0.3 to 1
            dummy.scale.set(scale, scale, scale);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <>
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <circleGeometry args={[0.05, 32]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
            </instancedMesh>
        </>
    );
};

const Connections = ({ count = 60 }) => {
    const linesGeometry = useRef();
    const { viewport, mouse } = useThree();

    // Create a set of points for connections (fewer than total particles for performance)
    const points = useMemo(() => {
        return new Array(count).fill().map(() => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * viewport.width * 1.5,
                (Math.random() - 0.5) * viewport.height * 1.5,
                0
            ),
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01,
                0
            )
        }));
    }, [count, viewport]);

    useFrame(() => {
        const mouseX = (mouse.x * viewport.width) / 2;
        const mouseY = (mouse.y * viewport.height) / 2;

        // Move points
        points.forEach(point => {
            point.position.add(point.velocity);

            // Boundary bounce
            if (Math.abs(point.position.x) > viewport.width / 1.5) point.velocity.x *= -1;
            if (Math.abs(point.position.y) > viewport.height / 1.5) point.velocity.y *= -1;

            // Mouse attraction/repulsion
            const dx = mouseX - point.position.x;
            const dy = mouseY - point.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 3) {
                point.position.x -= dx * 0.02;
                point.position.y -= dy * 0.02;
            }
        });

        // Update lines
        const positions = [];
        // Brute force connection check (fine for < 100 points)
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = points[i].position.distanceTo(points[j].position);
                if (dist < 3) { // Connection threshold
                    positions.push(
                        points[i].position.x, points[i].position.y, points[i].position.z,
                        points[j].position.x, points[j].position.y, points[j].position.z
                    );
                }
            }
        }

        linesGeometry.current.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );
    });

    return (
        <lineSegments>
            <bufferGeometry ref={linesGeometry} />
            <lineBasicMaterial color="#94a3b8" transparent opacity={0.15} />
        </lineSegments>
    );
};

const ParticleBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <Particles count={150} />
                <Connections count={40} />
            </Canvas>
        </div>
    );
};

export default ParticleBackground;

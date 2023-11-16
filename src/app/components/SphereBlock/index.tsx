import React, {useRef, useEffect, FC} from 'react';
import * as THREE from 'three';
import './css/index.css'

interface ISize {
    width: number;
    height: number;
}

const SphereBlock: FC<ISize> = ({width, height}) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 12, 12),
        new THREE.MeshBasicMaterial({color: '#FF0000', wireframe: true })
    );

    const sphereRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        camera.position.z = 1.8;
        if (sphereRef.current) {
            renderer.setSize(width, height);
            sphereRef.current.appendChild(renderer.domElement);

            scene.add(sphere);

            const animate = () => {
                requestAnimationFrame(animate);
                sphere.rotation.y += 0.004;
                renderer.render(scene, camera);
            };
            animate();
        }

        return () => {
            scene.remove(sphere);
            sphere.geometry.dispose();
            sphere.material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div className={'sphere'} ref={sphereRef}></div>;
};

export default SphereBlock;

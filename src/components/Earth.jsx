import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Duck() {
  const ref = useRef();
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/earth/Color Map.jpg");
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshStandardMaterial({ map: texture })
  );

  useEffect(() => {
    ref.current.add(sphere);
  }, []);

  useFrame(({ clock }) => {
    sphere.rotation.y = 0.2 * clock.getElapsedTime(); // rotate around Y-axis
    sphere.rotation.x = 0.2 * clock.getElapsedTime(); // rotate around X-axis
  });

  return <group ref={ref}></group>;
}

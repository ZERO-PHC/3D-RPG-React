import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const img =
  "https://res.cloudinary.com/dalnnaod7/image/upload/v1633539232/AnimekRound1_yrybev.png";

export default function RoundBar({roundBarRef}) {
  const texture = useLoader(THREE.TextureLoader, img);

  return (
    <mesh ref={roundBarRef} rotation={[0, Math.PI, 0]} position={[22, 28, 0]}>
    <planeBufferGeometry attach="geometry" args={[7, 3]} />
    <meshBasicMaterial attach="material" map={texture} transparent opacity={1} />
  </mesh>
  );
}

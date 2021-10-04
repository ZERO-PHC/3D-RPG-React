import React, { useState, useEffect , useRef} from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";

{
  /* <group ref={ref} position={[0, 0, 0]}>
<Camera position={[0, 20, -45]} near={1} far={1000} />
<group ref={planeref} position={[0, 0, 0]}>
  <Player />
</group>
</group> */
}

export default function Avatar() {
  const model = useLoader(GLTFLoader, "./avatar/scene.gltf");

  console.log("avatar animes", model.animations);
  // Here's the animation part
  // *************************
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************

  model.scene.traverse((child) => {
    if (child.isMesh) {
      // child.castShadow = true;
      // child.receiveShadow = true;
      // child.material.side = THREE.FrontSide;
    }
  });

  return <primitive 
  position={[20, 0, 6]} 
  object={model.scene} scale={0.1} />;
}

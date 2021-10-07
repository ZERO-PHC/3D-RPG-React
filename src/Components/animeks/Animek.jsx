import React from "react";
import { useLoader, useFrame } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function Animek({ ...props }) {
  const model = useLoader(GLTFLoader, props.path);
//   console.log("animes", model.animations);

  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);

   const clip =  model.animations[props.animation]

   const action = mixer.clipAction(clip)

   action.play()

    // model.animations.forEach((clip) => {
    //   const action = mixer.clipAction(clip);
    //   action.play();
    // });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });
  // *************************

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive position={props.position} object={model.scene} scale={props.scale} rotation={props.rotation} />;
}

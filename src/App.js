import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Ring,
  Sphere,
  RoundedBox,
  Plane,
} from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import "./App.css";
import Avatar from "./Components/Avatar";

function App() {
  const planeref = useRef({});
  const ref = useRef({});

  console.log("ref", ref.current.position);

  function ArenaPlane() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, 0.1, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeBufferGeometry attach="geometry" args={[76, 76]} />
        <meshStandardMaterial
          attach="material"
          color="silver"
          metalness={0.7}
          roughness={0.7}
        />
      </mesh>
    );
  }
  function ArenaEdge() {
    const [ref] = usePlane(() => ({
      rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[77, 77]} />

        <meshStandardMaterial
          attach="material"
          color="rgba(204, 0, 255, 0.5)"
          opacity={0.6}
          transparent
          metalness={0.7}
          roughness={0.7}
        />
      </mesh>
    );
  }

  const Animek1 = (props) => {
    const model = useLoader(GLTFLoader, "./hawky/scene.gltf");
    console.log("hawky animes", model.animations);

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
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.side = THREE.FrontSide;
      }
    });

    return (
      <primitive position={[18, 0, -29]} object={model.scene} scale={2.0} />
    );
  };

  const Animek2 = (props) => {
    const model = useLoader(GLTFLoader, "./nidorino/scene.gltf");
    console.log("hawky animes", model.animations);

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
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.side = THREE.FrontSide;
      }
    });

    return <primitive position={[0, 0, -20]} object={model.scene} scale={2} />;
  };

  const Animek3 = (props) => {
    const model = useLoader(GLTFLoader, "./luxray/scene.gltf");
    console.log("hawky animes", model.animations);

    // Here's the animation part
    // *************************
    let mixer;
    if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      // model.animations.forEach((clip) => {
      //   const action = mixer.clipAction(clip);
      //   action.play();
      // });
      const clip = model.animations[0];
      const action = mixer.clipAction(clip);
      action.play();
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

    return (
      <primitive position={[-18, 0, -29]} object={model.scene} scale={0.04} />
    );
  };

  const Animek4 = (props) => {
    const model = useLoader(GLTFLoader, "./jet1/scene.gltf");
    console.log("4 animes", model.animations);

    // Here's the animation part
    // *************************
    let mixer;
    if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      // model.animations.forEach((clip) => {
      //   const action = mixer.clipAction(clip);
      //   action.play();
      //  });
      const clip = model.animations[7];
      const action = mixer.clipAction(clip);
      action.play();
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

    return (
      <primitive
        rotation={[0, Math.PI /1, 0]}
        position={[0, 0, 20]}
        object={model.scene}
        scale={2}
      />
    );
  };

  const Animek5 = (props) => {
    const model = useLoader(GLTFLoader, "./bulba/scene.gltf");
    console.log("4 animes", model.animations);

    // Here's the animation part
    // *************************
    let mixer;
    if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      // model.animations.forEach((clip) => {
      //   const action = mixer.clipAction(clip);
      //   action.play();
      //  });
      const clip = model.animations[0];
      const action = mixer.clipAction(clip);
      action.play();
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

    return (
      <primitive
        rotation={[0, Math.PI /1, 0]}
        position={[18, 0, 30]}
        object={model.scene}
        scale={0.1}
      />
    );
  };
  const Animek6 = (props) => {
    const model = useLoader(GLTFLoader, "./jte2/scene.gltf");
    console.log("4 animes", model.animations);

    // Here's the animation part
    // *************************
    let mixer;
    if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      // model.animations.forEach((clip) => {
      //   const action = mixer.clipAction(clip);
      //   action.play();
      //  });
      const clip = model.animations[7];
      const action = mixer.clipAction(clip);
      action.play();
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

    return (
      <primitive
        rotation={[0, Math.PI /1, 0]}
        position={[-18, 0, 30]}
        object={model.scene}
        scale={4}
      />
    );
  };

  const AnimekCircle1 = () => {
    return (
      <Ring
        scale={0.2}
        args={[18, 21, 100]}
        smoothness={0.2}
        position={[-18, 0.2, -29]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    );
  };
  const AnimekCircle2 = () => {
    return (
      <Ring
        scale={0.2}
        args={[18, 21, 100]}
        smoothness={0.2}
        position={[0, 0.2, -21]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    );
  };
  const AnimekCircle3 = () => {
    return (
      <Ring
        scale={0.2}
        args={[18, 21, 100]}
        smoothness={0.2}
        position={[18, 0.2, -29]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    );
  };
  const AnimekCircle4 = () => {
    return (
      <Ring
        scale={0.2}
        args={[18, 21, 100]}
        smoothness={0.2}
        position={[18, 0.2, 29]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    );
  };
  const AnimekCircle5 = () => {
    return (
      <Ring
        scale={0.2}
        args={[18, 21, 100]}
        smoothness={0.2}
        position={[0, 0.2, 21]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    );
  };
  const AnimekCircle6 = () => {
    return (
      <Ring
        scale={0.2}
        args={[18, 21, 100]}
        smoothness={0.2}
        position={[-18, 0.2, 29]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    );
  };

  const MidFieldLine = () => {
    return (
      <Plane
        args={[76, 0.5]}
        position={[0, 0.3, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial color="purple" />
      </Plane>
    );
  };

  const MidFieldCircle = () => {
    return (
      <Ring
        scale={0.28}
        args={[18, 20, 100]}
        smoothness={0.2}
        position={[0, 0.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshPhongMaterial color="purple" />
      </Ring>
    );
  };

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <Suspense fallback={null}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.35} />
        <directionalLight
          ref={ref}
          intensity={0.6}
          position={[3, 2, 8]}
          shadow-mapSize-width={800}
          shadow-mapSize-height={1800}
          castShadow
        />
        {/* <spotLight position={[10, 30, 10]} angle={0.3} /> */}
        <Physics>
          <ArenaPlane />
          <ArenaEdge />
        </Physics>
        <group ref={ref} position={[0, 0, 0]}>
          <PerspectiveCamera
            makeDefault
            position={[0, 25, -75]}
            near={0.5}
            far={2000}
          />
          <group ref={planeref} position={[0, 0, 0]}>
            {/* <Avatar /> */}
          </group>
        </group>
        <MidFieldLine />
        <MidFieldCircle />
        <Animek1 />
        <Animek2 />
        <Animek3 />
        <AnimekCircle1 />
        <AnimekCircle2 />
        <AnimekCircle3 />
        <Animek4 />
        <Animek5 />
        <Animek6 />
         <AnimekCircle4 /> 
        <AnimekCircle5 />
        <AnimekCircle6 /> 
      </Suspense>
    </Canvas>
  );
}

export default App;

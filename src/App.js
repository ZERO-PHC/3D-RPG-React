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
  Text,
} from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { proxy, useSnapshot } from "valtio";

import "./App.css";
import Avatar from "./Components/Avatar";
import ArenaUI from "./Components/ArenaUI";
import RoundBar from "./Components/round_bar/RoundBar";

import { staticCards } from "./cards/cards.js";
import Cards from "./Components/Cards/CardsComponent";
import Animek from "./Components/animeks/Animek";
import AnimekCircle from "./Components/animeks/AnimekCircle";
import MidFieldLine from "./arenaBase/MidFieldLine";
import MidFieldCircle from "./arenaBase/MidFieldCircle";

function App() {
  const planeref = useRef({});
  const ref = useRef({});
  const roundBarRef = useRef({});
  // const [cardsState, setCardsState] = useState(staticCards);
  let cardsState = useRef(staticCards);

  // how to unite the refs of the cards

  // console.log("static cards", staticCards);
  // const [cardsState, setCardsState] = useState(staticCards);
  //   Using a Valtio state model to bridge reactivity between
  // the canvas and the dom, both can write to it and/or react to it.
  // const cardsState = proxy(staticCards);

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

  const ArenaTxt = () => (
    <Text
      fillOpacity={0}
      strokeWidth={"2.5%"}
      strokeColor="#00E0FF"
      fontSize={3}
      font="https://fonts.gstatic.com/s/orbitron/v9/yMJRMIlzdpvBhQQL_Qq7dys.woff"
      // anchorX="right"
      // anchorY="middle"
      position={[-34, 0.2, -27]}
      rotation={[Math.PI / 2.0, 9.4, 4.7]}
      direction={"rtl"}
    >
      ARENA-01
    </Text>
  );

  function getIdxDistance() {
    let idxDistance = 0;

    const selectedCards = getSelectedCards();
    console.log("selected Cards", selectedCards.length);

    switch (selectedCards.length) {
      case 1:
        idxDistance = 0;
        break;
      case 2:
        idxDistance = 2;
        break;
      case 3:
        idxDistance = 4;
        break;

      default:
        break;
    }

    return idxDistance;
  }

  function getSelectedCards() {
    return cardsState.current.filter((card) => {
      return card.selected != false;
    });
  }

  function handlePointerHover(card, setActive, active) {
    console.log("cardsStateref", card);
    setActive(!active);
  }

  function updateCardsState(card, selected) {
    cardsState.current.map((refCard) => {
      if (refCard.id == card.id) {
        console.log("matched card", card);

        refCard.selected = !selected;
      }
    });

    console.log("current state cards", cardsState.current);
  }

  // get ref of current pos of roundbar, update the state of the card to selected and listen in a spring for
  // changes in selected for animation
  function handlePointerDown(card, setSelected, selected) {
    console.log("current state cards", cardsState.current);

    console.log("cardsStateref", card);

    updateCardsState(card, selected);

    setSelected(!selected);
  }

  function setSelectedState(card, event, setFunc, stateVar) {
    switch (event) {
      case "enter":
        handlePointerHover(card, setFunc, stateVar);
        break;
      case "leave":
        handlePointerHover(card, setFunc, stateVar);
        break;
      case "down":
        handlePointerDown(card, setFunc, stateVar);
        break;

      default:
        break;
    }
  }

  console.log("newcards", cardsState);

  function handlePointer(cardId, event, setFunc, stateVar) {
    console.log("handling pointer down", cardId, event, setFunc);

    setSelectedState(cardId, event, setFunc, stateVar);
  }

  //Render
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

        <MidFieldLine />
        <MidFieldCircle />
        <Animek
          animation={0}
          path={"./hawky/scene.gltf"}
          position={[18, 0, -29]}
          scale={2.0}
        />
        <Animek
          animation={0}
          path={"./nidorino/scene.gltf"}
          position={[0, 0, -20]}
          scale={2.0}
        />
        <Animek
          animation={0}
          path={"./luxray/scene.gltf"}
          position={[-18, 0, -29]}
          scale={0.04}
        />
        <Animek
          animation={7}
          path={"./jet1/scene.gltf"}
          rotation={[0, Math.PI / 1, 0]}
          position={[0, 0, 20]}
          scale={2}
        />
        <Animek
          animation={0}
          path={"./bulba/scene.gltf"}
          rotation={[0, Math.PI / 1, 0]}
          position={[18, 0, 30]}
          scale={0.1}
        />
        <Animek
          animation={7}
          path={"./jte2/scene.gltf"}
          rotation={[0, Math.PI / 1, 0]}
          position={[-18, 0, 30]}
          scale={4}
        />
        <AnimekCircle
          scale={0.25}
          args={[18, 21, 100]}
          smoothness={0.2}
          position={[-18, 0.2, -29]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <AnimekCircle
          scale={0.25}
          args={[18, 21, 100]}
          smoothness={0.2}
          position={[0, 0.2, -21]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <AnimekCircle
          scale={0.25}
          args={[18, 21, 100]}
          smoothness={0.2}
          position={[18, 0.2, -29]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <AnimekCircle
          scale={0.25}
          args={[18, 21, 100]}
          smoothness={0.2}
          position={[18, 0.2, 29]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <AnimekCircle
          scale={0.25}
          args={[18, 21, 100]}
          smoothness={0.2}
          position={[0, 0.2, 21]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <AnimekCircle
          scale={0.25}
          args={[18, 21, 100]}
          smoothness={0.2}
          position={[-18, 0.2, 29]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <ArenaTxt />
        <RoundBar roundBarRef={roundBarRef} />
        <Cards
          cards={cardsState}
          handlePointer={handlePointer}
          roundBarRef={roundBarRef}
          getIdxDistance={getIdxDistance}
        />
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
      </Suspense>
    </Canvas>
  );
}

export default App;

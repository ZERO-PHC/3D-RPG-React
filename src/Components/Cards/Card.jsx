import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
// import { proxy, useSnapshot } from "valtio";
import { useSpring, animated } from "@react-spring/three";

export default function Card({ ...props }) {
  console.log("card props", props);
  const cardData = props.cardData;

  const ref = useRef();
  const group = useRef();
  const { nodes, materials } = useGLTF("./green_card/Card.gltf");
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(false);

 

  // const springs = useSpring({ scale: active ? 0.1 : 0.05 });
  const { scale } = useSpring({ scale: active ? 0.1 : 0.05 });

  const rb1v = props.roundBarRef.current.position;
  // console.log("distance", cardData.getIdxDistance());



  const { position } = useSpring({
    position: selected
      // ? [rb1v.x, rb1v.y + cardData.getIdxDistance(), rb1v.z]
      ? [rb1v.x, rb1v.y - props.getIdxDistance(), rb1v.z]
      : cardData.position,
  });

  return (
    // use ref for the mutation of the parent
    <group ref={group} {...props} dispose={null}>
      <animated.group
        ref={ref}
        position={position}
        rotation={cardData.rotation}
        scale={scale}
        //mutating state
        onPointerEnter={() => props.handlePointer(cardData, "enter", setActive, active)}
        onPointerLeave={() => props.handlePointer(cardData, "leave", setActive, active)}
        onPointerDown={() => props.handlePointer(cardData, "down", setSelected, selected)}
      >
        <mesh
          geometry={nodes["SquarePlane_-_baked"].geometry}
          material={materials.zion}
          material-color={cardData.materialColor}
          material-transparent
          material-opacity={0.5}
        />
        <mesh
          geometry={nodes["SquarePlane_-_baked_1"].geometry}
          material={materials["Zion 1"]}
          position={[0, 0, 0.1]}
          scale={[0.96, 0.97, 2]}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload("/Card.gltf");

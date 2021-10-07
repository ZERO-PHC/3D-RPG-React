import React from "react";
import { Plane } from "@react-three/drei"

export default function MidFieldLine() {
  return (
    <Plane
      args={[76, 0.5]}
      position={[0, 0.3, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <meshPhongMaterial color="purple" />
    </Plane>
  );
}

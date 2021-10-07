import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Billboard, Plane } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Card from "./Cards/Card";

// const url1 =
//   "https://res.cloudinary.com/dalnnaod7/image/upload/v1632953378/card_oa76v3.png";

export default function ArenaUI() {
//   const [texture1] = useLoader(THREE.ImageLoader, [url1]);

  useEffect(() => {
    // createCardsUI()
  }, []);

  // function createCardsUI() {

  // }

  

  return <Card/>;
}

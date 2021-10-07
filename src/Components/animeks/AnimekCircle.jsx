import React from 'react'
import { Ring } from "@react-three/drei"

export default function AnimekCircle({...props}) {
    return (
        <Ring
        scale={props.scale}
        args={props.args}
        smoothness={props.smoothness}
        position={props.position}
        rotation={props.rotation}
      >
        <meshPhongMaterial attach="material" color="#595D61" />
      </Ring>
    )
}

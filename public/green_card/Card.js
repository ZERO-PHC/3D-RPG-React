/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Card.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.05, 0, 0.11]} rotation={[-Math.PI, 0, Math.PI]} scale={0}>
        <mesh geometry={nodes['SquarePlane_-_baked'].geometry} material={materials.Zion} />
        <mesh
          geometry={nodes['SquarePlane_-_baked_1'].geometry}
          material={materials['Zion 1']}
          position={[0, 0, 1]}
          scale={[0.96, 0.97, 2]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Card.gltf')

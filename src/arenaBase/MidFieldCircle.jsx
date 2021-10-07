import React from 'react'
import { Ring } from "@react-three/drei"

export default function MidFieldCircle() {
        return (
            <Ring
              scale={0.2}
              args={[18, 20, 100]}
              smoothness={0.2}
              position={[0, 0.2, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <meshPhongMaterial color="purple" />
            </Ring>
          );
    
}

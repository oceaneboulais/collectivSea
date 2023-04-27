import { Suspense, useMemo, useRef } from 'react'
import { SpotLight } from 'three'
import {useVideoTexture, useTexture } from '@react-three/drei'


export default function CausticLight() {
  let videoTexture = null;
  
  videoTexture = useVideoTexture("./water_1_lite_1.mp4");

    const causticLight = useMemo(() => new SpotLight('#fff'), []);
    
    if (videoTexture != null){
      return <group>
        <Suspense fallback={<meshBasicMaterial wireframe />}>
          <primitive
            object={causticLight}
            position={[0, 20, 2]}
            intensity={1.5}
            map={videoTexture}
            castShadow={false}
            penumbra={0.5} />
          <primitive object={causticLight.target} position={[0, 0, 0]} />
        </Suspense>
      </group>
    } else {
      return null
    }
}

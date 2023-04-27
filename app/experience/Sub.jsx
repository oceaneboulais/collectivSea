import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Sub = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('./meshes/Water_Ship_001.glb');

  return (
    <group ref={ref} {...props} dispose={null} >
      <mesh
        name="Water_Ship_001"
        castShadow
        receiveShadow
        geometry={nodes.Water_Ship_001.geometry}
        material={materials.Material}
      ></mesh>
    </group>
  );
});

export default Sub;

useGLTF.preload('/Water_Ship_001.glb');
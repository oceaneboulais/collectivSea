import React, { useRef } from "react";
import { useGLTF, MeshWobbleMaterial, MeshDistortMaterial } from "@react-three/drei";

export default function Jellyfish(props) {
  const { nodes, materials } = useGLTF("./meshes/Medusa_001.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Medusa_001"
        castShadow
        receiveShadow
        geometry={nodes.Medusa_001.geometry}
        // material={materials.Material}
      >
          {/* <MeshDistortMaterial distort={0.5} speed={1} /> */}
          <MeshWobbleMaterial factor={3} speed={0.5} opacity={0}/>

        </mesh>
    </group>
  );
}

useGLTF.preload("./meshes/Medusa_001.glb");

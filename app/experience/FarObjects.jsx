import { useMediaQuery } from "@react-hook/media-query";
import { Float, Cylinder, Sphere } from "@react-three/drei";
import Model from "./Model";
import Jellyfish from "./Jellyfish";

export default function FarObjects() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      <Model
        model="mountains_001"
        scale={1}
        position={isDesktop ? [23, 0, -23] : [16, 0, -23]}
      />
      <Model
        model="mountains_001"
        scale={1}
        position={[-15, 0, -35]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Coral_reef_001"
        scale={1.3}
        position={[-13, 0, -24]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Coral_reef_005"
        scale={1.3}
        position={[-3, 0, -24]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Seaweed_007"
        scale={1}
        position={[11, 0, -28.0]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Coral_reef_006"
        scale={1}
        position={[16.5, 0, -13]}
        rotation={[0, -0.5, 0]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Seaweed_002"
        scale={1}
        position={[13, 0, -16]}
        rotation={[0, 0, 0]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Seaweed_003"
        scale={1}
        position={[14, 0, -16]}
        rotation={[0, 0, 0]}
        visible={isDesktop ? true : false}
      />
      <Model
        model="Coral_reef_009"
        scale={1}
        position={[12, 0, -20]}
        rotation={[0, 0, 0]}
        visible={isDesktop ? true : false}
      />
    </>
  )
}
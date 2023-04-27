import { useMediaQuery } from "@react-hook/media-query";
import { useRef, forwardRef } from "react";
import { Float, Cylinder, Sphere, QuadraticBezierLine, useScroll, Scroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Sub from "./Sub";

export default function SubAndMic() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const subRef = useRef();
  const anchorRef = useRef();
 
  return (
    <>
      <Float>
      <Scroll>
        <Sub
          ref={subRef}
          position={isDesktop ? [10, 15, -10] : [3, 15, -10]}
        />
        </Scroll>
      </Float>
      <Scroll>
      <Mic />
      </Scroll>
    </>
  )
}

function SlackWire({ start, mid, end, anchor, sub,v1 = new Vector3() ,v2 = new Vector3() }) {
  const ref = useRef()
  const scrollData = useScroll()
  useFrame(() => {
    const anchorPosition = anchor.current.getWorldPosition(v1);
    const subPosition = sub.current.getWorldPosition(v2);
    subPosition.z -= 0.5;
    subPosition.x -= 1.8;
    subPosition.y += 0;
    ref.current.setPoints(anchorPosition, subPosition)
  }, [])
  return (

    <QuadraticBezierLine
      ref={ref}
      start={start}
      end={end}
      mid={mid}
      lineWidth={4}
      fog={true}
      color={"#474747"}
      sub={sub}
    >
    </QuadraticBezierLine>
  );
}

const InvisibleAnchor = forwardRef(({position}, ref)=>{
  return (
    <object3D position={position} ref={ref}/>
  )
})

function Mic() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <group
      position={isDesktop ? [0.95, 0.2, -0.75] : [2, 0, 0]}
    >
      <Cylinder
        position={[-1, 0.02, 1]}
        rotation={[1.6, 0, 1]}
        args={[0.04, 0.02, 0.6, 32]}
        material-color="#222"
      />
      <Sphere
        args={[0.08, 6, 6]}
        position={[-1.25, 0.01, 1.15]}
      >
        <meshStandardMaterial color="#000" />
      </Sphere>
    </group>
  )
}

export default function Sand() {  
  return(
    <mesh position-y={0} rotation-x={ - Math.PI * 0.5} scale={250} receiveShadow>
      <planeGeometry receiveShadow={true}/>
      <meshStandardMaterial color="yellow"/>
    </mesh>
  )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 models/ball/ball.gltf 
*/

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSphereCollaider } from "../Collaiders/collaiders";
import { useCharacterAnimation } from "@/contexts/CharacterAnimation";

export const positions = {
  penalty: {
    position: [0, 0, 9.5],
  },
};

export const trayectories = {
  left_down: [-3, 0.3, 0],
  right_down: [6, 10, 10],
  center: [0, 0.3, 0],
};
export const trayectories_force = {
  left_down: [-70, 0, -300],
  right_down: [70, 70, -200],
  center: [0, 50, -300],
};

export function Ball(props) {
  const { position, animationTime, trayectory, force } = props;
  const [state, setState] = useState(positions[position]);
  const { animationIndex } = useCharacterAnimation();
  const { sphereCollaider, sphereCollaiderAPI } = useSphereCollaider({
    scale: [0.15, 0.15, 0.15],
    args: [0.15],
    position: positions[position].position,
    rotation: [0, 0, 0],
    mass: 0.2,
    type: "Dynamic",
    onCollide: (e) => console.log("collided"),
  });

  // useLayoutEffect(() => {
  //   sphereCollaiderAPI.applyImpulse([0, 0, 90], [0, 0, 0]);
  // }, [animationIndex]);
  // deajar las ultimas 100 milesimas de segundo para que se ejecute la animacion

  document.getElementById("restart").addEventListener("click", () => {
    // restart ball position
    sphereCollaiderAPI.velocity.set(0, 0, 0);
    sphereCollaiderAPI.angularVelocity.set(0, 0, 0);
    sphereCollaiderAPI.position.set(
      positions[position].position[0],
      positions[position].position[1],
      positions[position].position[2]
    );
  });
  useEffect(() => {
    switch (animationIndex) {
      case 1:
        setTimeout(() => {
          sphereCollaiderAPI.applyForce(
            trayectories_force[trayectory.replace(/ /g, "_")],
            [0, 0, 0]
          );
        }, animationTime * 1000 - 700);
        break;
      default:
        break;
    }
  }, [animationIndex]);
  useEffect(() => {
    setState(positions[position]);
  }, []);
  return (
    <group dispose={null}>
      <mesh ref={sphereCollaider}>
        <sphereGeometry args={[0.15, 10, 10]} />
        <meshStandardMaterial color={"#B0B0B0"} />
      </mesh>
    </group>
  );
}
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 arco.gltf 
*/

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import {
  BoxCollaider,
  CylinderCollaider,
  PlaneCollider,
} from "../Collaiders/collaiders";
import { goal_keeper_positions } from "@/utils/goalKeeperPositions";

let goal = false;

const planes = [
  // [position, rotation, size]
  [
    [0, 1.5, -2],
    [0, 0, 0],
    [7.6, 2.8, 0.1],
  ], // Fondo
  [
    [-3.7, 1.5, -0.7],
    [0, Math.PI / 2, 0],
    [2.5, 2.8, 0.1],
  ], // Lado izquierdo
  [
    [3.7, 1.5, -0.7],
    [0, -Math.PI / 2, 0],
    [2.5, 2.8, 0.1],
  ], // Lado derecho
  [
    [0, 2.8, -0.7],
    [-Math.PI / 2, 0, 0],
    [7.6, 2.3, 0.1],
  ], // Parte superior
];

const goal_area = [
  [0, 0, -0.9],
  [-Math.PI / 2, 0, 0],
  [7.4, 2, 0.1],
]; // Parte inferior

export function Goal(props) {
  const { shootType, keepPosition, setGoals } = props;
  const { nodes, materials } = useGLTF("./models/goal/goal.gltf");

  const handleGoal = (e) => {
    if (!goal) {
      goal = true;
      setGoals((prev) => prev + 1);
    }
  };

  document.getElementById("restart").addEventListener("click", () => {
    goal = false;
  });

  return (
    <group>
      <group {...props} dispose={null}>
        <BoxCollaider
          args={[0.9, 2, 0.4]}
          position={
            goal_keeper_positions[shootType][keepPosition]?.collider_position
          }
          rotation={
            goal_keeper_positions[shootType][keepPosition]?.collider_rotation
          }
          mass={1}
          type="Static"
        />
        <>
          {planes.map((plane, index) => (
            <BoxCollaider
              key={index}
              position={plane[0]}
              rotation={plane[1]}
              args={plane[2]}
              material={{ restitution: 0.2, friction: 0.5 }}
              name={"net"}
            />
          ))}
        </>
        <BoxCollaider
          args={goal_area[2]}
          position={goal_area[0]}
          rotation={goal_area[1]}
          name={"goal_area"}
          onCollide={handleGoal}
        />
        <CylinderCollaider
          scale={[0.1, 0.1, 7.32]}
          args={[0.1, 0.1, 7.32]}
          position={[0, 2.9, 0.5]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <CylinderCollaider
          args={[0.1, 0.1, 3]}
          position={[-3.66, 1.3, 0.5]}
          // scale={[0.2, 2.44, 0.2]}
          rotation={[0, 0, 0]}
        />
        <CylinderCollaider
          args={[0.1, 0.1, 3]}
          position={[3.66, 1.3, 0.5]}
          // scale={[0.2, 2.44, 0.2]}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/goal/goal.gltf");

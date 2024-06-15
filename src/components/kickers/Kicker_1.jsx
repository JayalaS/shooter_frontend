/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ../models/kicker/kicker_1.gltf 
*/

import React, { use, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimation } from "@/contexts/CharacterAnimation";
import * as THREE from "three";
import { BoxCollaider, useBoxCollaider } from "../Collaiders/collaiders";
import { useFrame } from "@react-three/fiber";

export const positions = {
  penalty: {
    position: [-1, 0, 12],
    rotation: [0, Math.PI, 0],
    animation: 0,
  },
};

export function Kicker_1(props) {
  const { position, onActiveAnimation } = props;
  const { nodes, materials, animations } = useGLTF(
    "./models/kicker/kicker_1.gltf"
  );
  const group = useRef();
  
  const { actions, names } = useAnimations(animations, group);
  const { animationIndex } = useCharacterAnimation();

  
  const [lastPosition, setLastPosition] = useState(
    new THREE.Vector3(
      positions[position].position[0],
      positions[position].position[1],
      positions[position].position[2]
    )
  );

  const handleKick = () => {
    const index = positions[position].animation;
    const action = actions[names[index]].setLoop(THREE.LoopOnce, 1);
    action.reset();
    action.play();
    action.clampWhenFinished = true;
    action.onFinished = () => {
      const finalPosition = group.current.position.clone();
      setLastPosition(finalPosition);
    };
  };
  useEffect(() => {
    switch (animationIndex) {
      case 1:
        handleKick();
        break;
      default:
        onActiveAnimation({ time: actions[names[0]].getClip().duration });
        break;
    }
  }, [animationIndex]);
  useEffect(() => {
    if (group.current) {
      group.current.position.copy(lastPosition);
    }
  }, [lastPosition]);

  document.getElementById("restart").addEventListener("click", () => {
    // restart to innitial model properties
    const index = positions[position].animation;
    const action = actions[names[index]];
    action.stop();
    group.current.position.set(
      positions[position].position[0],
      positions[position].position[1],
      positions[position].position[2]
    );
  });

  return (
    <group ref={group} {...positions[position]} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig5Hips} />
          <skinnedMesh
            name="Ch38_Body"
            geometry={nodes.Ch38_Body.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Body.skeleton}
          />
          <skinnedMesh
            name="Ch38_Eyelashes"
            geometry={nodes.Ch38_Eyelashes.geometry}
            material={materials.Ch38_hair}
            skeleton={nodes.Ch38_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch38_Hair"
            geometry={nodes.Ch38_Hair.geometry}
            material={materials.Ch38_hair}
            skeleton={nodes.Ch38_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch38_Shirt"
            geometry={nodes.Ch38_Shirt.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch38_Shorts"
            geometry={nodes.Ch38_Shorts.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Shorts.skeleton}
          />
          <skinnedMesh
            name="Ch38_Socks"
            geometry={nodes.Ch38_Socks.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Socks.skeleton}
          />
          <skinnedMesh
            name="Ch38_Shoes"
            geometry={nodes.Ch38_Shoes.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch38_Shoes.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/kicker/kicker_1.gltf");
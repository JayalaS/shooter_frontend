"use client";
import styles from "./page.module.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import {
  CharacterAnimationProvider,
  useCharacterAnimation,
} from "@/contexts/CharacterAnimation";
import { Goalkeeper } from "@/components/goalkeepers/Goalkeeper";
import Grass from "../../components/grass/Grass";
import Interface from "@/components/interface/Interface";
import { Kicker_1 } from "@/components/kickers/Kicker_1";
import { Goal } from "@/components/goal/goal";
import { Ball } from "@/components/ball/ball";
import { Debug, Physics } from "@react-three/cannon";
import {
  BoxCollaider,
  SphereCollaider,
} from "@/components/Collaiders/collaiders";
import { Stadium } from "@/components/stadium/Stadium";
import { Goalkeeper_1 } from "@/components/goalkeepers/GoalKeeper_1";

const Game = (props) => {
  const [shootType, setShootType] = useState("penalty");
  const [kickerAnimation, setKickerAnimation] = useState("rigth_down");
  const [currentKickerAnimation, setCurrentKickerAnimation] = useState({
    time: 0,
  });
  const [keeperAction, setKeeperAction] = useState("right_down");
  const [direction, setDirection] = useState("left");
  const [force, setForce] = useState(1);

  const [goals, setGoals] = useState(0);

  return (
    <div className={styles.container}>
      <CharacterAnimationProvider>
        <Canvas shadows camera={{ position: [0, 2.5, 15], fov: 75 }}>
          <ambientLight intensity={2} color={"0xffffff"} />
          <directionalLight color="white" position={[5, 5, 5]} />
          <OrbitControls target={[0, 1.5, 0]} />
          <Suspense fallback={null}>
            <Physics
              broadphase="SAP"
              gravity={[0, -9.8, 0]}
              frictionGravity={[0, 1, 0]}
              defaultContactMaterial={{ restitution: 0.8 }}
            >
              {/* <Debug color="red"> */}
              {/* 
                <Goalkeeper position={keeperAction} /> */}
              <Kicker_1
                position={shootType}
                animation={kickerAnimation}
                onActiveAnimation={setCurrentKickerAnimation}
              />
              <Ball
                position={shootType}
                animationTime={currentKickerAnimation.time}
                direction={direction}
                force={force}
              />
              <Goalkeeper_1 action={keeperAction} type={shootType} />
              <Goal
                scale={[2, 0.6, 0.6]}
                shootType={shootType}
                keepPosition={keeperAction}
                setGoals={setGoals}
              />
              <Stadium position={[-0.5, -2.43, 48.5]} />
              <BoxCollaider
                args={[120, 1, 120]}
                position={[0, -0.5, 0]}
                rotation={[0, 0, 0]}
                mass={1}
                type="Static"
                name="ground"
                // onCollide={(e) => console.log("collided")}
              >
                <mesh>
                  <boxGeometry args={[120, 1, 120]} />
                  <meshBasicMaterial />
                </mesh>
              </BoxCollaider>
              {/* </Debug> */}
            </Physics>
          </Suspense>
        </Canvas>
        <Interface
          setBallPosition={setShootType}
          setDirection={setDirection}
          setForce={setForce}
          setKeeperAction={setKeeperAction}
          goals={goals}
        />
      </CharacterAnimationProvider>
    </div>
  );
};

export default Game;

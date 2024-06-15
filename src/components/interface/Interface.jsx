import { useCharacterAnimation } from "@/contexts/CharacterAnimation";
import styles from "./Interface.module.css";

export const KICK = 1;

const Interface = (props) => {
  const {
    setBallPosition,
    restartBall,
    setTrayectory,
    setForce,
    setKeeperAction,
  } = props;
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimation();
  const handleKick = () => {
    setAnimationIndex(KICK);
  };

  const restartShoot = () => {
    setAnimationIndex(0);
  };

  return (
    <div className={styles.container}>
      <select
        onChange={(e) => {
          setTrayectory(e.target.value);
          setKeeperAction(e.target.value);
        }}
      >
        <option value="left down">left</option>
        <option value="center">center</option>
        <option value="right down">right</option>
      </select>
      <button onClick={handleKick}>kick</button>
      <button id="restart" onClick={restartShoot}>
        restart
      </button>
    </div>
  );
};

export default Interface;

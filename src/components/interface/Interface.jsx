import { useCharacterAnimation } from "@/contexts/CharacterAnimation";
import styles from "./Interface.module.css";

export const KICK = 1;

const Interface = (props) => {
  const {
    setBallPosition,
    restartBall,
    setDirection,
    setForce,
    setKeeperAction,
    goals,
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
      <h3>direction</h3>
      <select
        onChange={(e) => {
          setDirection(e.target.value);
        }}
      >
        <option value="left">left</option>
        <option value="center">center</option>
        <option value="right">right</option>
      </select>
      <h3>force</h3>
      <select
        onChange={(e) => {
          setForce(e.target.value);
        }}
      >
        <option value={1}>low</option>
        <option value={2}>medium</option>
        <option value={3}>higth</option>
      </select>
      <h3>keeper action</h3>
      <select
        onChange={(e) => {
          setKeeperAction(e.target.value);
        }}
      >
        <option value="right_down">rigth down</option>
        <option value="right_up">rigth up</option>
        <option value="center">center</option>
        <option value="left_down">left down</option>
        <option value="left_up">left up</option>
      </select>
      <button onClick={handleKick}>kick</button>
      <button id="restart" onClick={restartShoot}>
        restart
      </button>
      <h1>Goals: {goals}</h1>
    </div>
  );
};

export default Interface;

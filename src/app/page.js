import { CharacterAnimationProvider } from "@/contexts/CharacterAnimation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <CharacterAnimationProvider>
      <div className={styles.container}></div>
    </CharacterAnimationProvider>
  );
}

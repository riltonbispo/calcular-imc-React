import styles from "./App.module.css";
import powerImage from "./assets/powered.png";

function App() {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>esquerda</div>
        <div className={styles.rightSide}>direita</div>
      </div>
    </div>
  );
}

export default App;

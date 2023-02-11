import { useState } from "react";
import styles from "./App.module.css";

import { levels, calculateImc, Level } from "./helpers/imc";
import powerImage from "./assets/powered.png";
import leftArrowImage from "./assets/leftarrow.png";

import { GridItem } from "./components/GridItem";

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert("preencha os campos");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ab
            neque assumenda magnam dicta esse ipsum provident dolor?
          </p>

          <input
            type="number"
            placeholder="digite sua altura"
            value={heightField > 0 ? heightField : ""}
            // o e.target.value retorna uma string, por isso usamos o parseFloat
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="digite seu peso"
            value={weightField > 0 ? weightField : ""}
            // o e.target.value retorna uma string, por isso usamos o parseFloat
            disabled={toShow ? true : false}
            onChange={(e) => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false} >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}></GridItem>
              ))}
            </div>
          )}

          {toShow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import styles from "./App.module.css";
import powerImage from "./assets/powered.png";


function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const handleCalculateButton = () =>{
    if(heightField && weightField){

    }else{
      alert('preencha os campos')
    }

  }

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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ab neque assumenda magnam dicta esse ipsum provident dolor?</p>

          <input
            type="number"
            placeholder="digite sua altura"
            value={heightField > 0 ? heightField : ''}
            // o e.target.value retorna uma string, por isso usamos o parseFloat
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          
          <input
            type="number"
            placeholder="digite seu peso"
            value={weightField > 0 ? weightField : ''}
            // o e.target.value retorna uma string, por isso usamos o parseFloat
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton} >Calcular</button>
        </div>
        <div className={styles.rightSide}>direita</div>
      </div>
    </div>
  );
}

export default App;

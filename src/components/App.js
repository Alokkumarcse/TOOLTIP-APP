import React from 'react';

import styles from "../styles/App.module.css";
import Button from "./Button";
import Navbar from './Navbar';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.btn__container} >
        <div className={styles.btn1}>
          <Button btnText={"Hover 1"} key={1} />
        </div>
        <div className={styles.btn2}>
          <Button btnText={"Hover 2"} key={2} />
        </div>
        <div className={styles.btn3}>
          <Button btnText={"Hover 3"} key={3} />
        </div>
        <div className={styles.btn4}>
          <Button btnText={"Hover 4"} key={4} />
        </div>
        <div className={styles.btn5}>
          <Button btnText={"Hover 5"} key={5} />
        </div>
      </div>
    </div>
    
  );
}

export default App;

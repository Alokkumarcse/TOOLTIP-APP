import React from 'react';

import styles from "../styles/App.module.css";
import Button from "./Button";
import Navbar from './Navbar';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.btn}>
        <Button />
      </div>
     
    </div>
    
  );
}

export default App;

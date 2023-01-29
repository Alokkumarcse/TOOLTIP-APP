import React from "react";

import styles from '../styles/Tooltip.module.css';

function Tooltip({content, btnRef}) {
  console.log(btnRef.current.getBoundingClientRect());

  return (
    <div className={styles.tooltip}> 
      {content} 
      <div className={`${styles.arrow} ${styles.bottom__arrow}`}></div>
    </div>
  );
}

export default Tooltip;
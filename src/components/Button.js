import React, {useRef, useState} from "react";

import styles from '../styles/Button.module.css';
import Tooltip from "./Tooltip";

function Button({btnText}) {
  const [hover, setHover] = useState(false);
  const btnRef = useRef(null);

  function handleMouseEnter(){
    setHover(true);
  }

  function handleMouseLeave(){
    setHover(false);
  }

  return(
    <div className={styles.btn__container}>
      <div 
        ref={btnRef}
        className={styles.btn}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > {btnText} </div>
      { hover === true ? <Tooltip content={"New tooltip"} btnRef={btnRef} /> : null}
    </div>
  )
}


export default Button;
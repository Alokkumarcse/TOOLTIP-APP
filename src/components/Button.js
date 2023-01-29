import React, {useRef, useState} from "react";

import styles from '../styles/Button.module.css';
import Tooltip from "./Tooltip";

function Button({btnText}) {
  /** hover variable help to show tooltip when ever hover on that button */
  const [hover, setHover] = useState(false);
  /** pass the position as prop to Tooltip component */
  const [position, setPosition] = useState({top:0, left:0, bottom:0, right:0, height:0, width:0})
  /** useRef() help ot find out particular button actual position in current window */
  const btnRef = useRef(null);

  /** Function for handle the mouse Enter event */
  function handleMouseEnter(){
    const pos = btnRef.current.getBoundingClientRect();
    const {top,left, right, bottom, height, width} = pos;
    setPosition({top, left, right, bottom, height,width})
    setHover(true);
  }

  /** Function for handle the mouse leave event */
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
      { hover === true ? <Tooltip content={"New tooltip"} btnRef={btnRef} position={position} /> : null}
    </div>
  )
}

export default Button;
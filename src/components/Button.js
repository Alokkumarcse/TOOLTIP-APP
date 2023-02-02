import React, {useRef, useState} from "react";

import styles from '../styles/Button.module.css';
import Tooltip from "./Tooltip";

function Button({btnText}) {
  /** hover variable help to show tooltip when ever hover on that button */
  const [hover, setHover] = useState(false);
  /** pass the position as prop to Tooltip component */
  const [coordinates, setCoordinates] = useState({top:0, left:0, bottom:0, right:0, height:0, width:0})
  /** set the position where want to show */
  const [position, setPosition] = useState("");
  const [ttcontent, setContent] = useState("I'm default content of tooltip.");
  /** useRef() help ot find out particular button actual position in current window */
  const btnRef = useRef(null);

  /** Function for handle the mouse Enter event */
  function handleMouseEnter(){
    const pos = btnRef.current.getBoundingClientRect();
    const {top,left, right, bottom, height, width} = pos;
    setCoordinates({top, left, right, bottom, height,width})
    setHover(true);
  }

  /** Function for handle the mouse leave event */
  function handleMouseLeave(){
    setHover(false);
  }

  /** Function for handle tooltip position */
  function handelTooltipPosition(e) {
    if(e.target.value === "selected"){
      setPosition("");
      return;
    }
    setPosition(e.target.value);
    console.log(e.target.value);
  }

  /** Function for handle tooltip content */
  function handelTooltipContent(e){
    setContent(e.target.value);
  }

  return(
    <div className={styles.container}>
      <div >
        <input 
          type="text" 
          placeholder="Give tooltip content" 
          onChange={handelTooltipContent}
          className={styles.input}
        />
        <select id="position" onChange={handelTooltipPosition} className={styles.select}>
          <option value ="selected">Select tooltip position</option>
          <option value="top">Top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
        </select>
      </div>

      <div 
        ref={btnRef}
        className={styles.btn}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      > <span className={styles.span}> Hover Over Me </span>
        { 
          hover === true 
          ? <Tooltip 
              content={ttcontent} 
              btnRef={btnRef} 
              coordinates={coordinates} 
              position={position}  
              className={styles.tooltip}
            /> 
          : null
        }
      </div>
    </div>
  )
}

export default Button;
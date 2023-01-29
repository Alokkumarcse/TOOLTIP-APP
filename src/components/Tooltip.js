import React, {useEffect, useState} from "react";

import styles from '../styles/Tooltip.module.css';

function Tooltip({content, btnRef, position}) {
  /** Finding window current height and width using custom hooks */ 
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return windowSize;
  }

  const windowSize = useWindowSize();
  const cw = windowSize.width; // client width
  const ch = windowSize.height; // client height

  /** set the tooltip position */
  const { top, left, right, bottom, height, width } = position; //getting all position value from position props

  let xl = 0, yt= 0, arrow="";

  if(left < width){
    xl = width + 4;
    yt = 0;
    arrow = "left";

  }else if(  cw - right < width){
    xl = -width - 4;
    yt = 0;
    arrow = "right";
  }else if(top < ch - bottom){
    xl=0;
    yt= height + 4;
    arrow="top";
  }else if( ch - bottom < top){
    xl= 0;
    yt= -height + 4;
    arrow="bottom";
  }
  
  /** Render out tooltip jsx here */
  return (
    <div className={styles.tooltip} style={{left:xl, top:yt}}> 
      {content} 
      {arrow === 'left' && <div className={`${styles.arrow} ${styles.left__arrow}`}></div> }
      {arrow === 'right' && <div className={`${styles.arrow} ${styles.right__arrow}`}></div>}
      {arrow === 'top' && <div className={`${styles.arrow} ${styles.top__arrow}`}></div>}
      {arrow === 'bottom' && <div className={`${styles.arrow} ${styles.bottom__arrow}`}></div>}      
    </div>
  );
}

export default Tooltip;
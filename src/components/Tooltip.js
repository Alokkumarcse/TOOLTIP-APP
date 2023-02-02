import React from "react";

import styles from '../styles/Tooltip.module.css';

function Tooltip({content, btnRef, position,coordinates}) {
  /** Finding window current height and width using custom hooks */ 
  // function useWindowSize() {
  //   const [windowSize, setWindowSize] = useState({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  
  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowSize({
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       });
  //     }
  
  //     window.addEventListener('resize', handleResize);
  
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);
  //   return windowSize;
  // }

  // const windowSize = useWindowSize();
  // const cw = windowSize.width; // client width
  // const ch = windowSize.height; // client height

  // /** set the tooltip position */
  const {height, width } = coordinates; //getting all position value from position props

  let xl = 0, yt= 0, arrow="";
  if(position === ''){
    xl = 0;
    yt = height;

  }else if(position === 'right'){
    xl = width + 4;
    yt = -height;
    arrow = "left";

  }else if(  position === 'left'){
    xl = -width-13;
    yt = 0;
    arrow = "right";
  }else if(position === 'bottom'){
    xl=0;
    yt= height + 3;
    arrow="top";
  }else if( position === 'top'){
    xl= 0;
    yt= -height-16;
    arrow="bottom";
  }
  
  /** Render out tooltip jsx here */
  return (
    <div className={styles.tooltip} style={{left:xl, top:yt}} > 
      {content} 
      {arrow === 'left' && <div className={`${styles.arrow} ${styles.left__arrow}`}></div> }
      {arrow === 'right' && <div className={`${styles.arrow} ${styles.right__arrow}`}></div>}
      {arrow === 'top' && <div className={`${styles.arrow} ${styles.top__arrow}`}></div>}
      {arrow === 'bottom' && <div className={`${styles.arrow} ${styles.bottom__arrow}`}></div>}      
    </div>
  );
}

export default Tooltip;
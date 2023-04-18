import React, { useEffect, useState } from "react";
import styles from "./Clock.module.css"

const Clock = () => {

  const [date, setDate] = useState(new Date());
  
  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {

    const timerID = setInterval(
      () => tick(),
      1000
    );

    return () => {
      clearInterval(timerID);
    };
    
   }, [] );

  return (
    <div className={styles.container}>      
      <h1>Clock component</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default Clock;

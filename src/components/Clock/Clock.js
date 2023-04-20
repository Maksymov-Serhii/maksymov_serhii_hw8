import React, { useEffect, useMemo, useState } from "react";
import styles from "./Clock.module.css"

const Clock = () => {

  const [date, setDate] = useState(new Date());

  // useMemo

  const formattedTime = useMemo(() => {
    return date.toLocaleTimeString();
  }, [date]);
  
  const tick = () => {
    setDate(new Date());
  }

  useEffect(() => {

    // componentDidMount
    const timerID = setInterval(
      () => tick(),
      1000
    );
      
    // componentWillUnmount
    return () => {
      clearInterval(timerID);
    };

  }, []);  
  
  const [prevDate, setPrevDate] = useState(null);
  
  // shouldComponentUpdate
  useEffect(() => {
    if (prevDate && prevDate.getTime() !== date.getTime()) {
      console.log("Time has changed!");
    }
    setPrevDate(date);
  }, [date, prevDate]);

  return (
    <div className={styles.container}>      
      <h1>Clock component</h1>
      <h2>It is {formattedTime}.</h2>
    </div>
  )
}

export default Clock;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Clock.module.css"

const Counter = ({ getCount }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const counter = getCount();
    setState(counter);
  }, [getCount])

  return (
    <div className={styles.container}>
      <h3>Counter</h3>
      <p>{state}</p>
    </div>
  )
}

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

  // useCallback

  const [count, setCount] = useState(-1);

  const getCount = useCallback(() => {
    return count;
  }, [count]);
  
  useEffect(() => {
    setCount(count + 1);
  }, [date]);

  return (
    <div className={styles.container}>      
      <h1>Clock component</h1>
      <h2>It is {formattedTime}.</h2>
      <Counter getCount={getCount}/>
    </div>
  )
}

export default Clock;

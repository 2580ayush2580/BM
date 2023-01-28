import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../container/card";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementIfOdd,
//   selectCount,
// } from "../../app/reducers/billReducer";
import styles from "./bill.module.css";

export function Counter() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Card />
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
        >
          -
        </button>
        {/* <span className={styles.value}>{count}</span> */}
        <button
          className={styles.button}
          aria-label="Increment value"
          // onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const { category = "Hello" } = props;
  return (
    <div className={`${styles.card} br-1`}>
      <div>
        <div className="flex justify-between">
          <div className={`${styles.heading}`}>{category}</div>
          <div className={`${styles.price}`}>{category}</div>
        </div>
        <div className="flex justify-between align-items-center">
          <div>
            <span className={`${styles.pill} bg-secondry secondry br-1`}>
              {category}
            </span>
            <div className={`${styles.pill} bg-secondry secondry br-1`}>
              {category}
            </div>
          </div>
          <div>
            <button className="btn btn-outline-primary custom-btn ">
              Edit
            </button>
            <button className="btn btn-outline-danger custom-btn ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

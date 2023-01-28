import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../container/card";
import { addBill, deleteBill } from "../../app/reducers/billReducer";
import styles from "./bill.module.css";

export function Counter() {
  const { bills, categories } = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  const handleDelete = (id) => {
    dispatch(deleteBill(id));
  };

  const handleEdit = (id) => {
    if (id) {
    }
  };

  const handleAddBill = () => {};

  return (
    <>
      <div className={styles.billLeftPart}>
        <div className="m1">
          <button className="btn btn-outline-success">+ Add Bill</button>
        </div>
        {bills && bills.length > 0
          ? bills.map((data) => {
              return (
                <Card
                  key={data?.id}
                  data={data}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })
          : null}
      </div>
    </>
  );
}

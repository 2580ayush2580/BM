import { createSlice } from "@reduxjs/toolkit";
import { bills, categories } from "../sampleData";

let initialState = {
  bills,
  categories,
};

const billsData = localStorage.getItem("bills");
if (billsData) {
  const parseData = JSON.parse(billsData);
  console.log(parseData);
  initialState = parseData;
}

const setLocalStoragrData = (state) => {
  localStorage.setItem("bills", JSON.stringify(state));
};

export const counterSlice = createSlice({
  name: "Bills",
  initialState,
  reducers: {
    addBill: (state, action) => {
      const { id, description, amount, category, date } = action.payload;
      state.bills.push({
        id,
        description,
        amount,
        category,
        date,
        isHighlight: false,
      });
      setLocalStoragrData(state);
    },
    editBill: (state, action) => {
      const { id, description, amount, category, date } = action.payload;
      state.bills.forEach((bill) => {
        if (id === bill.id) {
          bill.description = description;
          bill.amount = amount;
          bill.category = category;
          bill.date = date;
        }
      });
      setLocalStoragrData(state);
    },
    deleteBill: (state, action) => {
      const newBills = state.bills.filter(
        (bill) => bill?.id !== action?.payload
      );
      state.bills = [...newBills];
      setLocalStoragrData(state);
    },
  },
});

export const { addBill, deleteBill, editBill } = counterSlice.actions;

export default counterSlice.reducer;

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

export const counterSlice = createSlice({
  name: "Bills",
  initialState,
  reducers: {
    addBill: (state, action) => {
      state.bills.push({
        id: action.payload.id,
        description: action.payload.description,
        date: action.payload.date,
        amount: action.payload.amount,
        category: action.payload.category,
        isHighlight: false,
      });
      localStorage.setItem("bills", JSON.stringify(state));
    },
    deleteBill: (state, action) => {
      const newBills = state.bills.filter(
        (bill) => bill?.id !== action?.payload
      );
      state.bills = [...newBills];
      localStorage.setItem("bills", JSON.stringify(state));
    },
  },
});

export const { addBill, deleteBill } = counterSlice.actions;

export default counterSlice.reducer;

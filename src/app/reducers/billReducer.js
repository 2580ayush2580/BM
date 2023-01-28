import { createSlice } from "@reduxjs/toolkit";
import { bills, categories } from "../sampleData";

let initialState = {
  bills,
  categories,
};

const billsData = localStorage.getItem("bills");
if (billsData) {
  initialState = billsData;
}

export const counterSlice = createSlice({
  name: "Bills",
  initialState,
  reducers: {
    addBill: (state, action) => {
      state.value += 1;
    },
    deleteBill: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, deleteBill } = counterSlice.actions;

export default counterSlice.reducer;

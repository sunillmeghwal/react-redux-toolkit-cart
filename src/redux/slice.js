import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.value += 1;
      console.log(action.payload);
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : null;
    },
    clearAllItem: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllItem } = addToCart.actions;
export default addToCart.reducer;

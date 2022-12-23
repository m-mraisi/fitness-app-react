import { createSlice } from "@reduxjs/toolkit";

// the auth state and actions
const initialCartItems = {
  totalPrice: "0",
  sessions: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartItems,
  reducers: {
    addClass(state, action) {
      const item = action.payload;
      state.sessions.push(item);
      state.totalPrice = (+state.totalPrice + +item.duration * 0.5).toFixed(2);
      return state;
    },
    removeClass(state, action) {
      const id = action.payload;
      const itemToRemove = state.sessions.find((item) => item.id === id);
      state.sessions = state.sessions.filter((item) => item.id !== id);
      state.totalPrice = (
        +state.totalPrice -
        +itemToRemove.duration * 0.5
      ).toFixed(2);
      return state;
    },
    clearCart(state) {
      console.log(initialCartItems);
      state = initialCartItems;
      return state;
    },
  },
});

// exposing the slice actions
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

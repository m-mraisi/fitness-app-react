import { createSlice } from "@reduxjs/toolkit";

// the auth state and actions
const initialErrorState = { errorMessage: undefined };

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    clear(state) {
      state.errorMessage = initialErrorState.errorMessage;
    },
  },
});

// exposing the slice actions
export const errorActions = errorSlice.actions;

export default errorSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// the auth state and actions
const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// exposing the slice actions
export const authActions = authSlice.actions;

export default authSlice.reducer;

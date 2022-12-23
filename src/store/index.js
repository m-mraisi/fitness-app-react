import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import errorReducer from "./error";
import sessionReducer from "./sessions";
import cartReducer from "./cart";

// creating the store that holds all the other reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    sessions: sessionReducer,
    cart: cartReducer,
  },
});

export default store;

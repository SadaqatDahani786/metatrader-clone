import { configureStore } from "@reduxjs/toolkit";

//Reducers
import quotesReducer from "./quotesReducer";

/*
 ** ** =============================================================
 ** ** ** Redux Store
 ** ** =============================================================
 */
const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});

export default store;

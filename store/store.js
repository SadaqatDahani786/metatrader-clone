import { configureStore } from "@reduxjs/toolkit";

//Reducers
import quotesReducer from "./quotesReducer";
import accountsReducer from "./accountsReducer";
import navigationReducer from "./navigationReducer";

/*
 ** ** =============================================================
 ** ** ** Redux Store
 ** ** =============================================================
 */
const store = configureStore({
  reducer: {
    quotes: quotesReducer,
    accounts: accountsReducer,
    navigation: navigationReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

/*
 ** **
 ** ** ** Default State
 ** **
 */
const defaultState = [
  {
    pair: "EUR/USD",
    pair_full: "Euro vs United States Dollar",
    bid: 1.1802,
    ask: 1.1804,
    change: -0.0012,
  },
  {
    pair: "GBP/USD",
    pair_full: "Great Britian Pound vs United States Dollar",
    bid: 1.3805,
    ask: 1.3807,
    change: 0.0002,
  },
  {
    pair: "USD/JPY",
    pair_full: "United States Dollar vs Japanese Yen",
    bid: 109.853,
    ask: 109.877,
    change: 0.002,
  },
  {
    pair: "EUR/CAD",
    pair_full: "Euro vs Canadian Dollar",
    bid: 1.1302,
    ask: 1.1804,
    change: -0.1012,
  },
];

/*
 ** ** =============================================================
 ** ** ** Slice [sliceQuotes]
 ** ** =============================================================
 */
const sliceQuotes = createSlice({
  name: "quotes",
  initialState: defaultState,
  reducers: {
    addQuote: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

/*
 ** ** =============================================================
 ** ** ** Export [Reducer] [Actions]
 ** ** =============================================================
 */
export default sliceQuotes.reducer;
export const { addQuote } = sliceQuotes.actions;

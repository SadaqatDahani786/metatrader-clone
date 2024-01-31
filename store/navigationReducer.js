import { createSlice } from "@reduxjs/toolkit";

/*
 ** **
 ** ** ** Default State
 ** **
 */
const defaultState = 0;

/*
 ** ** =============================================================
 ** ** ** Slice [sliceNavReducer]
 ** ** =============================================================
 */
const sliceNavReducer = createSlice({
  name: "navigation",
  initialState: defaultState,
  reducers: {
    changeNavActive: (state, { payload }) => {
      return payload;
    },
  },
});

/*
 ** ** =============================================================
 ** ** ** Export [Reducer] [Actions]
 ** ** =============================================================
 */
export default sliceNavReducer.reducer;
export const { changeNavActive } = sliceNavReducer.actions;

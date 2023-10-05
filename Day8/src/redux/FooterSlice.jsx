import { createSlice } from "@reduxjs/toolkit";

export const FooterSlice = createSlice({
  name: "footerview",
  initialState: {
    footerview: null,
  },
  reducers: {
    open: (state,action) => {
      state.footerview = action.payload;
    },
    close: (state,action) => {
      state.footerview = action.payload;
    },
  },
});

export const { open,close } = FooterSlice.actions;

export const selectFooter = (state) => state.footerview.footerview;

export default FooterSlice.reducer;

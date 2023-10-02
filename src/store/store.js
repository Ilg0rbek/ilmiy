import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "hello",
  },
];

export const studentSlice = createSlice({
  name: "student",
  initialState,
  extraReducers: {},
});

export default studentSlice.reducer;

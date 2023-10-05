import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getAllStudenData = createAsyncThunk("/student", async () => {
  try {
    const res = await axiosConfig.get("/student");
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const studentSlice = createSlice({
  name: "student-slice",
  initialState,
  extraReducers: {
    //get all student data
    [getAllStudenData.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllStudenData.rejected]: (state) => {
      state.isError = true;
    },
    [getAllStudenData.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default studentSlice.reducer;

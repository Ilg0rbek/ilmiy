import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "./baseUrl";
import axios from "axios";

const initialState = {
  users: {
    data: [],
    isLoading: false,
    isError: false,
  },
};

export const getAllData = createAsyncThunk("/users", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const studentSlice = createSlice({
  name: "student",
  initialState,
  extraReducers: {
    //get all data
    [getAllData.pending]: (state) => {
      state.users.isLoading = true;
    },
    [getAllData.rejected]: (state) => {
      state.users.isError = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.users.isLoading = false;
      state.users.isError = false;
      state.users.data = action.payload;
    },
  },
});

export default studentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getAllStudenData = createAsyncThunk("/student", async () => {
  try {
    const res = await axiosConfig.get("/students");
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteStudent = createAsyncThunk("/delete", async (id) => {
  try {
    return await axiosConfig.delete(`/students/delete/${id}`);
  } catch (error) {
    console.log(error.message);
  }
});

export const updateStudent = createAsyncThunk("/update", async (id, data) => {
  try {
    return axiosConfig.put(`/students/delete/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
});

export const studentSlice = createSlice({
  name: "student-slice",
  initialState,
  extraReducers: (builder) => {
    //get all student data
    builder
      .addCase(getAllStudenData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllStudenData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(getAllStudenData.rejected, (state, action) => {
        state.isError = true;
      })
  },
});

export default studentSlice.reducer;

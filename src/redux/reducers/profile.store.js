import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  data: [],
  getStudentdata:[],
  isLoading: false,
  isError: false,
};

export const getAllStudenData = createAsyncThunk("/student", async () => {
  try {
    const res = await axiosConfig.get("/profile");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteProfile = createAsyncThunk("/delete", async (id) => {
  try {
    return await axiosConfig.delete(`/students/delete/${id}`);
  } catch (error) {
    console.log(error.message);
  }
});

export const updateProfile = createAsyncThunk("/update", async (id, data) => {
  console.log(id);
  try {
    return axiosConfig.put(`/students/delete/${id}`, data);
  } catch (error) {
    console.log(error.message);
  }
});

export const postProfile = createAsyncThunk("/post", async (data) => {
  console.log(data);
  try {
    const res = await axiosConfig.post(`/profile`, data);
    console.log(res);
    return res
  } catch (error) {
    console.log(error.message);
  }
});

export const profileSlice = createSlice({
  name: "profile-slice",
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
        state.getStudentdata = action.payload;
      })
      .addCase(getAllStudenData.rejected, (state, action) => {
        state.isError = true;
      })
  },
});

export default profileSlice.reducer;

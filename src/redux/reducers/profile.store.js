import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  data: [],
  getStudentdata:[],
  isLoading: false,
  isError: false,
  getText:""
};

export const getAllStudenData = createAsyncThunk("/student", async () => {
  try {
    const res = await axiosConfig.get("/auth/users");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteProfile = createAsyncThunk("/delete", async (id) => {
  try {
    return await axiosConfig.delete(`/auth/delete/${id}`);
  } catch (error) {
    console.log(error.message);
  }
});

export const updateProfile = createAsyncThunk("/update", async (data) => {
  try {
    const res = axiosConfig.put(`/auth/user/${data.id}`, data.userProfileData);
    console.log(res);
    return res
  } catch (error) {
    console.log(error);
  }
});

export const postProfile = createAsyncThunk("/post", async (data) => {
  // console.log();
  try {
    const res = await axiosConfig.post(`/auth/register`, data);
    console.log("mana",res);
    return res
  } catch (error) {
    console.log(error);
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
      // for post message
      .addCase(postProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.getText = action.payload.data;
        console.log(action.payload.data);
      })
      .addCase(postProfile.rejected, (state, action) => {
        state.isError = true;
      })
  },
});

export default profileSlice.reducer;

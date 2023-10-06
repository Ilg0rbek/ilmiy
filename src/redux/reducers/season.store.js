import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getAllSeason = createAsyncThunk("/season", async () => {
  try {
    const res = await axiosConfig.get("/season");
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteSeason = createAsyncThunk("/delete-season", async (id) => {
  try {
    return await axiosConfig.delete(`/season/delete/${id}`);
  } catch (error) {
    console.log(error.message);
  }
});

export const updataSeason = createAsyncThunk(
  "/updata-season",
  async (id, data) => {
    try {
      return axiosConfig.put(`/update/${id}`, data);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const seasonSlice = createSlice({
  name: "season",
  initialState,
  extraReducers: (builder) => {
    //get all season data
    builder
      .addCase(getAllSeason.pending, (state) => {
        state.isLoading = true;
        console.log(state.isLoading);
      })
      .addCase(getAllSeason.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
        console.log(state.data);
      })
      .addCase(getAllSeason.rejected, (state, action) => {
        state.isError = true;
        console.log(state.isError);
      });
  },
});

export default seasonSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const getAllNews = createAsyncThunk("news", async () => {
  try {
    const res = await axiosConfig.get("/news");
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const addNews = createAsyncThunk("add/news", async (data) => {
  try {
                                                 
  } catch (error) {
    console.log(error.message);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAllNews.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default newsSlice.reducer;

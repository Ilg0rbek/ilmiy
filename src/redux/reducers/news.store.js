import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";

const initialState = {
  getData: [],
  postData: [],
  dataDelete:[],
  isLoading: false,
  isError: false,
};

export const getAllNews = createAsyncThunk("news", async () => {
  try {
    const res = await axiosConfig.get("/news");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const addNews = createAsyncThunk(
  "add/news",
  async (valus, { rejectWithValue }) => {
    try {
      const res = await axiosConfig.post("/news", valus);
      return res;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteData = createAsyncThunk(
  "add/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axiosConfig.delete(`/news/delete/${id}`);
      return res;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder) => {
    builder
      //Method @GET
      //get all news
      .addCase(getAllNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getData = action.payload;
      })
      .addCase(getAllNews.rejected, (state) => {
        state.isError = true;
      })
      //Method @POST
      //add new data
      .addCase(addNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postData = action.payload;
        console.log(action);
      })
      .addCase(addNews.rejected, (state) => {
        state.isError = true;
      })

      //Method @DELETE
      //delete data
      .addCase(deleteData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataDelete = action.payload;
      })
      .addCase(deleteData.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default newsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../baseUrl";


const initialState = {
    data:[],
    isLoading:false,
    isError:false
}
export const login = createAsyncThunk('login', async (values)=>{
  try {
    const res = await axiosConfig.post("/auth/login", values)
    // console.log(res.data.data.role);
    sessionStorage.setItem("user", res.data.data.role)
    return res.data

  } catch (error) {
    console.log(error.message); 
  }
})

let name = "Bilmasam"




const authSlice = createSlice({
  name:"auth",
  initialState,
  extraReducers:(builder)=>{
      builder
       .addCase(login.pending, (state)=>{
           state.isLoading = true
       })
       .addCase(login.fulfilled, (state, {payload}) =>{
        
        state.isLoading = false;
        state.data = payload
       })
       .addCase(login.rejected, (state, {payload})=>{

        state.data = payload;
        state.isError = true
       })
  }
})

export default authSlice.reducer
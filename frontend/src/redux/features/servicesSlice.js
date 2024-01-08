import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getServices = createAsyncThunk(
  "services/getServices",
  async () => {
    const fetchedServices = await axios.get("/api/services");
    return fetchedServices.data;
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    services: [],
    loading: false,
  },
  extraReducers: {
    [getServices.pending]: (state) => {
      state.loading = true;
    },
    [getServices.fulfilled]: (state, action) => {
      state.loading = false;
      state.services = action.payload;
    },
    [getServices.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default serviceSlice.reducer;

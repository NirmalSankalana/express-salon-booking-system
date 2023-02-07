import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async () => {
    const fetchedEmployees = await axios.get("/api/employees/");
    console.log(fetchedEmployees.data);
    return fetchedEmployees.data;
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    loading: false,
  },
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.loading = true;
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.loading = false;
      state.employees = action.payload;
    },
    [getEmployees.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default employeeSlice.reducer;

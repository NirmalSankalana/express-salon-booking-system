import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userObject: {
      name: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.userObject = action.payload;
    },
    userSignOut: (state, action) => {
      state.userObject = {};
      state.userObject.name = "";
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, userSignOut } = userSlice.actions;

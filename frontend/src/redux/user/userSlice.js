import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    sigiInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    updateUserStart: (state, action) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      (state.error = true), (state.loading = false);
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      (state.currentUser = null), (state.loading = false), (state.error = null);
    },
    deleteUserFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSuccess: (state) => {
      (state.currentUser = null), (state.loading = false), (state.error = null);
    },
    signOutUserFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
  },
});

export const {
  signInFailure,
  signInStart,
  sigiInSuccess,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserStart,
  signOutUserFailure,
  signOutUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;

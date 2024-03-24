import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    username: '', 
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectUsername = state => state.auth.username;

export default authSlice.reducer;

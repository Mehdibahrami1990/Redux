import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };
const authSclice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSclice.actions;
export default authSclice.reducer;

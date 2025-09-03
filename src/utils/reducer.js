import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: ''   
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; 
    },
    clearUsername: (state) => {
      state.username = ''; 
    }
  }
});

export const { setUsername, clearUsername } = authSlice.actions; 
export default authSlice.reducer;
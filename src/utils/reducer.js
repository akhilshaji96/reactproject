import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '' ,
    email:''  
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; 
      state.email = action.payload.email;
    },
    clearUsername: (state) => {
      state.username = ''; 
    }
  }
});

export const { setUsername, clearUsername } = authSlice.actions; 
export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    // value: 0,
    userloginsuccess : {},
  },
 
 
  reducers: {
    updateUserLoginSuccess : (state,action)=>{
      state.userloginsuccess = action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { updateUserLoginSuccess } = userSlice.actions

export default userSlice.reducer
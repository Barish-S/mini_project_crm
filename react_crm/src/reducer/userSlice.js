import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  ClientDetails: {},

 
 
  reducers: {
    
    RegisterClient: (state, action) => {
      state.ClientDetails = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { RegisterClient} = userSlice.actions

export default userSlice.reducer
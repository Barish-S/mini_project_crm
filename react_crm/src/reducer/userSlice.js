import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
    EmpRegDet : {}
    
    ClientDetails: {},

  },


  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    RegisterClient: (state, action) => {
      state.ClientDetails = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails, RegisterClient } = userSlice.actions

export default userSlice.reducer 
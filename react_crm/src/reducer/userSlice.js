import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
    EmpRegDet:{},
    userloginsuccess:{}
    // value: 0,
  },
 
 
  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    updateUserLoginSuccess : (state,action)=>{
      state.userloginsuccess = action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,updateUserLoginSuccess} = userSlice.actions

export default userSlice.reducer 
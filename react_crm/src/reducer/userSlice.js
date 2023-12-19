import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    superAdminLogin:{
      email:"",
      password:""
    },
    clientLogin:{
      email:"",
      password:""
    },
    EmpRegDet:{},
    ClientDetails:{},
    userloginsuccess:{}
    
  },


  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    RegisterClient : (state,action) => {
      state.ClientDetails = action.payload
    },
    updateUserLoginSuccess : (state,action) => {
      state.userloginsuccess = action.payload
    },
    setSuperAdminLogin : (state,action) => {
      state.superAdminLogin = action.payload
    },
    setClientLogin : (state,action) => {
      state.clientLogin = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,RegisterClient } = userSlice.actions

export default userSlice.reducer 
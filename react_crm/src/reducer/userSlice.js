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
    userloginsuccess:{},
    
    ClientDetails: {},

  },


  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    RegisterClient: (state,action) => {
      state.ClientDetails = action.payload
    },
    setClientLogin: (state,action) => {
      state.clientLogin = action.payload
    },
    superAdminLogin: (state,action) => {
      state.superAdminLogin = action.payload
    },
    updateUserLoginSuccess: (state,action) => {
      state.superAdminLogin = action.payload
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,RegisterClient, setClientLogin,superAdminLogin,updateUserLoginSuccess} = userSlice.actions

export default userSlice.reducer 
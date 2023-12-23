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
    userloginsuccess:{
      email:"",
      password:""
    },
    
    ClientDetails: {},

    loggedStatus:{
        user:""
    }

  },


  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    updateUserLoginSuccess : (state,action) => {
      state.userloginsuccess = action.payload
    },
    RegisterClient : (state,action) => {
      state.ClientDetails = action.payload
    },
    setSuperAdminLogin : (state,action) => {
      state.superAdminLogin = action.payload
    },
    setClientLogin : (state,action) => {
      state.clientLogin = action.payload
    },
    setLoggedStatus : (state,action) => {
      state.loggedStatus = action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,updateUserLoginSuccess,RegisterClient,setSuperAdminLogin,setClientLogin,setLoggedStatus } = userSlice.actions

export default userSlice.reducer 
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
    setSuperAdminLogin : (state,action) => {
      state.superAdminLogin = action.payload
    },
    setClientLogin : (state,action) => {
      state.clientLogin = action.payload
    },
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    updateUserLoginSuccess :(state,action) => {
      state.userloginsuccess=action.payload
    },
    RegisterClient : (state,action) => {
      state.ClientDetails=action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,setSuperAdminLogin,setClientLogin,updateUserLoginSuccess,RegisterClient} = userSlice.actions

export default userSlice.reducer 
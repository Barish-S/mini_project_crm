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

    loggedStatus:{
        user:"Admin"
    }

  },


  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    setLoggedStatus:(state,action)=>{
        state.loggedStatus.user=action.payload
    },
    RegisterClient:(state,action)=>{
        state.ClientDetails.user=action.payload
    },
    setClientLogin:(state,action)=>{
        state.clientLogin.user=action.payload
    },
    superAdminLogin:(state,action)=>{
        state.superAdminLogin.user=action.payload
    },
    updateUserLoginSuccess:(state,action)=>{
        state.userloginsuccess.user=action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,setLoggedStatus, RegisterClient,setClientLogin,superAdminLogin,updateUserLoginSuccess} = userSlice.actions

export default userSlice.reducer 
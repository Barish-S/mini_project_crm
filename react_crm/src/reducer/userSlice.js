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

    EmpRegDet:{
      name : "divya",
      email : "div@gmail.com",
      password : "2345",
      gender : "female",
      dob : "",
      aadhar : "23604116",
      phone : "7993337687",
      address : "kottar",
      pincode : "629002",
      district : "kanyakumari",
      state : "tamil nadu",
      education : "BA.english",
      workbase : ""
    },

    userloginsuccess:{},
    
    ClientDetails: {},

    loggedStatus:{
        user:""
    }
  },


  reducers: {
    EmployeeRegisterDetails : (state,action) => {
      state.EmpRegDet = action.payload
    },
    setLoggedStatus:(state,action)=>{
        state.loggedStatus.user=action.payload
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
    }   
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,setLoggedStatus,updateUserLoginSuccess,RegisterClient,setSuperAdminLogin,setClientLogin } = userSlice.actions

export default userSlice.reducer ;
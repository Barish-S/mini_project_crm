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
    
    ClientDetails: {
  // name:"chrish",
  // email:"chrish@gmail.com",
  // password:"12345",
  // phone:"6369848944",
  // gender:"male",
  // dob:"15-05-2002",
  // address:"colony",
  // district:"kk",
  // state:"tn",
  // pincode:"60028"
    },

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
    RegisterClient : (state,action) => {
      state.ClientDetails = action.payload
    },
    UpdateUserLoginSuccess : (state,action) => {
      state.userloginsuccess = action.payload
    },
   setClientLogin : (state,action) => {
      state.clientLogin = action.payload
    },
    superAdminLogin : (state,action) => {
      state.superAdminLogin = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { EmployeeRegisterDetails,setLoggedStatus,RegisterClient,UpdateUserLoginSuccess,setClientLogin,superAdminLogin } = userSlice.actions

export default userSlice.reducer 
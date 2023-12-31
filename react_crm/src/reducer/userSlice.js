import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    superAdminLogin: {
      email: "",
      password: ""
    },
    clientLogin: {
      email: "",
      password: ""
    },

    EmpRegDet:{
      name : "",
      email : "",
      password : "",
      gender : "",
      dob : "",
      aadhar : "",
      phone : "",
      address : "",
      pincode : "",
      district : "",
      state : "",
      education : "",
      workbase : ""
    },

    userloginsuccess:{},
    
    ClientDetails: {},

    loggedStatus: {
      user: "Admin",
      data: [],
      empData: [],
      clientData: [],
      status: ""
    },

    Assignedperson : [
      
    ],

    WorkDetails:[],
  },



  reducers: {
    setSuperAdminLogin: (state, action) => {
      state.superAdminLogin = action.payload
    },
    setClientLogin: (state, action) => {
      state.clientLogin = action.payload
    },
    EmployeeRegisterDetails: (state, action) => {
      state.EmpRegDet = action.payload
    },
    setLoggedData: (state, action) => {
      state.loggedStatus.data = action.payload
    },
    setLoggedUser: (state, action) => {
      state.loggedStatus.user = action.payload
    },
    setEmpData: (state, action) => {
      state.loggedStatus.empData = action.payload
    },
    setClientData: (state, action) => {
      state.loggedStatus.clientData = action.payload
    },
    setLoggedStatus:(state,action)=>{
      state.loggedStatus.status=action.payload
  },
    
    RegisterClient: (state,action) => {
      state.ClientDetails = action.payload
    },
    setClientLogin: (state,action) => {
      state.clientLogin = action.payload
    },
    setSuperAdminLogin: (state,action) => {
      state.superAdminLogin = action.payload
    },
    updateUserLoginSuccess: (state,action) => {
      state.userloginsuccess = action.payload
    },
    setWorkDetails:(state,action) => {
      state.WorkDetails = action.payload
    },
    setAssignedperson : (state,action) => {
      state.Assignedperson = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSuperAdminLogin,setClientData, EmployeeRegisterDetails, setLoggedStatus, RegisterClient, setClientLogin, updateUserLoginSuccess, setLoggedData, setEmpData,setWorkDetails,setLoggedUser,setAssignedperson } = userSlice.actions

export default userSlice.reducer ;
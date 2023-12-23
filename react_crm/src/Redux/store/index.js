import {configureStore } from '@reduxjs/toolkit'

import userReducer from '../../reducer/userSlice'
import apiReducer from '../../reducer/apiSlice'

export default configureStore({
  reducer:{
    user:userReducer,
    api:apiReducer
  }
 
})

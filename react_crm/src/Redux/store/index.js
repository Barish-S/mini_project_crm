import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../../reducer/userSlice'

export default configureStore({
<<<<<<< HEAD
  reducer:{
    user:userReducer,
  },
=======

  reducer:{
    user:userReducer
  }
  
>>>>>>> 757d768edfc310b4b27ba24f0d1a53a87a0c8646
})
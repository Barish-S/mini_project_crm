import {configureStore } from '@reduxjs/toolkit'

import userReducer from '../../reducer/userSlice'

export default configureStore({
  user:userReducer,
})
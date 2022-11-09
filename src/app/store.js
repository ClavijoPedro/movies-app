import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice.js'
import authReducer from '../reducers/authSlice.js'

export const store = configureStore({
    reducer:{
        auth:authReducer,
        user:userReducer,
    }
})

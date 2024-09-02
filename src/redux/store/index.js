import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/UserSlice'
import userApi from '../api/userApi'
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddeleware) =>
    getDefaultMiddeleware().concat(userApi.middleware),
})

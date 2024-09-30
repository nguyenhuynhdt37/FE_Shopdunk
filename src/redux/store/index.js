import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/UserSlice'
import cartReducer from '../slice/CartSlice'
import productReducer from '../slice/ProductSlice'
export const store = configureStore({
  reducer: {
    auth: userReducer,
    cart: cartReducer,
    product: productReducer,
  },
})

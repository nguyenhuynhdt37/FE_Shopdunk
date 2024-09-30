import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  totalCount: 0,
  totalPrice: 0,
  dataPromotionCode: null,
  totalDiscount: 0,
}
const baseUrl = import.meta.env.VITE_API_URL
export const getdataOrder = createAsyncThunk(
  'user/getdataOrder',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}cart/getData`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.status)
    }
  }
)
export const createCartItem = createAsyncThunk(
  'cart/create',
  async ({ data, token }, thunkAPI) => {
    try {
      console.log(data)
      const response = await axios.post(`${baseUrl}cart/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.data?.message || 'Có lỗi xảy ra!',
        })
      } else {
        return thunkAPI.rejectWithValue({
          status: 500,
          message: 'Không thể kết nối đến server!',
        })
      }
    }
  }
)
export const deleteCartItem = createAsyncThunk(
  'cart/delete',
  async ({ id, token }, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.data?.message || 'Có lỗi xảy ra!',
        })
      } else {
        return thunkAPI.rejectWithValue({
          status: 500,
          message: 'Không thể kết nối đến server!',
        })
      }
    }
  }
)
export const getPoromotionCode = createAsyncThunk(
  'promotion/get_code',
  async ({ giftCode, token }, thunkAPI) => {
    console.log(giftCode)

    try {
      const response = await axios.get(
        `${baseUrl}promotion/get_code?giftCode=${giftCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.data?.message || 'Có lỗi xảy ra!',
        })
      } else {
        return thunkAPI.rejectWithValue({
          status: 500,
          message: 'Không thể kết nối đến server!',
        })
      }
    }
  }
)
export const updateCart = createAsyncThunk(
  'user/updateCart',
  async ({ quantity, id, token }, thunkAPI) => {
    try {
      const response = await axios.put(
        `${baseUrl}cart/update/${id}`,
        quantity,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      return response.data
    } catch (error) {
      console.error('Lỗi cập nhật giỏ hàng:', error)
      if (error.response) {
        return thunkAPI.rejectWithValue({
          status: error.response.status,
          message: error.response.data?.message || 'Có lỗi xảy ra!',
        })
      } else {
        return thunkAPI.rejectWithValue({
          status: 500,
          message: 'Không thể kết nối đến server!',
        })
      }
    }
  }
)
const CartSlice = createSlice({
  name: 'cartRedux',
  initialState,
  reducers: {
    removePromotionCode: (state) => {
      state.dataPromotionCode = null
      state.totalDiscount = 0
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getdataOrder.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(getdataOrder.fulfilled, (state, action) => {
      console.log('cart payload', action.payload)

      const { cartItems, productCount } = action.payload
      state.isLoading = false
      state.data = cartItems
      state.totalCount = productCount || 0
      state.totalPrice =
        cartItems.length > 0
          ? cartItems.reduce((init, item) => {
              console.log('item', item)
              if (item.cartItem) {
                return (init +=
                  item.memoryOption.price * item.cartItem.quantity)
              }
            }, 0)
          : 0
      state.totalDiscount =
        (state.totalPrice *
          (state.dataPromotionCode
            ? state.dataPromotionCode.percentDiscount
            : 0)) /
        100
    })
    builder.addCase(getdataOrder.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(updateCart.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.map((item) => {
        if (item.cartItem.id === action.meta.arg.id) {
          console.log(action.meta.arg.quantity)

          item.cartItem.quantity = action.meta.arg.quantity
        }
        return item
      })
      state.totalCount = state.data.reduce(
        (init, value) =>
          state.data.length > 0 && (init += value.cartItem.quantity),
        0
      )
      state.totalPrice =
        state.data.length > 0
          ? state.data.reduce((init, item) => {
              console.log('item', item)
              if (item.cartItem) {
                return (init +=
                  item.memoryOption.price * item.cartItem.quantity)
              }
            }, 0)
          : 0
      state.totalDiscount =
        (state.totalPrice *
          (state.dataPromotionCode
            ? state.dataPromotionCode.percentDiscount
            : 0)) /
        100
    })
    builder.addCase(updateCart.rejected, (state, action) => {
      state.isLoading = false
      state.error_update = action.payload
    })
    builder.addCase(createCartItem.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(createCartItem.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(createCartItem.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    builder.addCase(deleteCartItem.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = state.data.filter(
        (p) => p.cartItem.id !== action.meta.arg.id
      )
      state.totalCount = state.data.reduce(
        (init, value) => value && (init += value.cartItem.quantity),
        0
      )
      state.totalPrice =
        state.data.length > 0
          ? state.data.reduce((init, item) => {
              console.log('item', item)
              if (item.cartItem) {
                return (init +=
                  item.memoryOption.price * item.cartItem.quantity)
              }
            }, 0)
          : 0
      state.totalDiscount =
        (state.totalPrice *
          (state.dataPromotionCode
            ? state.dataPromotionCode.percentDiscount
            : 0)) /
        100
    })
    builder.addCase(deleteCartItem.rejected, (state, action) => {
      state.isLoading = true
      state.error = action.payload
    })
    builder.addCase(getPoromotionCode.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(getPoromotionCode.fulfilled, (state, action) => {
      state.isLoading = false
      state.dataPromotionCode = action.payload
      console.log(action.payload)

      state.totalDiscount =
        (action.payload.percentDiscount * state.totalPrice) / 100
    })
    builder.addCase(getPoromotionCode.rejected, (state) => {
      state.isLoading = false
      state.error = null
    })
  },
})

export const { removePromotionCode } = CartSlice.actions
export default CartSlice.reducer

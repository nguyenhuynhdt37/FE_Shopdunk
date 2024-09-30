import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  token: '',
  user: null,
  loading: false,
  errorStatus: null,
}

const baseUrl = import.meta.env.VITE_API_URL
export const fetchUserLogin = createAsyncThunk(
  'user/login',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}users/login`, payload)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.status)
    }
  }
)
export const GetUserToToken = createAsyncThunk(
  'user/getdata',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}users/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return response.data
    } catch (error) {
      console.log('error', error.status)

      return thunkAPI.rejectWithValue(402)
    }
  }
)

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      ;(state.token = ''), (state.user = null), (state.refreshToken = '')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.loading = true
        state.errorStatus = ''
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.errorStatus = ''
        state.loading = false
        state.refreshToken = action.payload.refreshToken
        state.token = action.payload.token
      })
      .addCase(fetchUserLogin.rejected, (state, action) => {
        state.loading = false
        state.errorStatus = action.payload
      })
      .addCase(GetUserToToken.pending, (state) => {
        state.loading = true
        state.errorStatus = ''
      })
      .addCase(GetUserToToken.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.refreshToken = localStorage.getItem('refreshToken')
        state.token = localStorage.getItem('token')
      })
      .addCase(GetUserToToken.rejected, (state, action) => {
        state.loading = false
        state.errorStatus = action.payload
      })
  },
})

export const { logOut } = UserSlice.actions
export default UserSlice.reducer

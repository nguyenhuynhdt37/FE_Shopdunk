import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  refreshToken: '',
  user: null,
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTokenAndRefestToken: (state, action) => {
      ;(state.token = action.payload.data.token),
        (state.refreshToken = action.payload.data.refreshToken)
    },
    setUserInfo: (state, action) => {
      state.user = action.payload.user
    },
    logOut: (state) => {
      ;(state.token = ''), (state.user = null), (state.refreshToken = '')
    },
  },
})

export const { setTokenAndRefestToken, logOut, setUserInfo } = UserSlice.actions
export default UserSlice.reducer

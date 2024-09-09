import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  user: {},
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInfoUser: (state, action) => {
      ;(state.token = action.payload.token), (state.user = action.payload.user)
    },
    logOut: (state) => {
      ;(state.token = null), (state.user = null)
    },
  },
})

export const { setInfoUser, logOut } = UserSlice.actions
export default UserSlice.reducer

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
  },
})

export const { setInfoUser } = UserSlice.actions
export default UserSlice.reducer

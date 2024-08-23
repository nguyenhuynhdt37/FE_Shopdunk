import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userInfo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reduces: {
    loginSuccess: (state, action) => {
      (state.token = action.payload.token),
        (state.userInfo = action.payload.userInfo);
    },
    logout: (state, action) => {
      (state.token = null), (state.userInfo = null);
    },
  },
});

export default userSlice.reducer;
export const { loginSuccess, logout } = userSlice.actions;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const state = getState()
      const token = state.auth.token || localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: 'users/login',
        method: 'post',
        body: data,
      }),
    }),
    getUserByToken: builder.query({
      query: () => ({
        url: 'users/info',
        method: 'get',
      }),
    }),
    refreshToken: builder.mutation({
      query: (data) => ({
        url: 'users/refresh-token',
        method: 'post',
        body: data,
      }),
      transformResponse: (response) => {
        console.log(response)
        if (response) {
          localStorage.setItem('refreshToken', response.refreshToken)
          localStorage.setItem('token', response.token)
        }
      },
    }),
  }),
})

export const {
  useLoginMutation,
  useGetUserByTokenQuery,
  useRefreshTokenMutation,
} = userApi
export default userApi

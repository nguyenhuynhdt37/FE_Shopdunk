import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      let token = getState().auth.token
      console.log('>>', token)

      if (!token) {
        token = localStorage.getItem('token') || sessionStorage.getItem('token')
      }
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
  }),
})

export const { useLoginMutation, useGetUserByTokenQuery } = userApi
export default userApi

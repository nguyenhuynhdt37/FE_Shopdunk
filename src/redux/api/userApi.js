import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: 'users/login',
        method: 'post',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = userApi
export default userApi

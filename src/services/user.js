import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userAccessToken = () => {
  const accessToken = localStorage.getItem('userTokenAccess')
  console.log(accessToken)
  return accessToken
}

const DATA_TAG = { type: 'Users', id: 'LIST' }

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
  }),
  endpoints: (build) => ({
    authRegistration: build.mutation({
      query: ({ email, password, userName, userSurname, userCity }) => ({
        url: 'auth/register/',
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          name: userName,
          surname: userSurname,
          city: userCity,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    authLogin: build.mutation({
      query: ({ email, password }) => ({
        url: 'auth/login/',
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    getCurrentUser: build.query({
      query: (token) => ({
        url: 'user/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
  }),
})

export const {
  useAuthRegistrationMutation,
  useAuthLoginMutation,
  useGetCurrentUserQuery,
} = userApi

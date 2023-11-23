import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

    updateUserToken: build.mutation({
      query: ({ accessToken, refreshToken }) => ({
        url: 'auth/login/',
        method: 'PUT',
        body: JSON.stringify({
          access_token: accessToken,
          refresh_token: refreshToken,
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

    editCurrentUser: build.mutation({
      query: ({ userName, userSurname, userPhone, userCity, token }) => ({
        url: 'user/',
        method: 'PATCH',
        body: JSON.stringify({
          name: userName,
          surname: userSurname,
          phone: userPhone,
          city: userCity,
        }),
        headers: {
          Authorization: `Bearer ${token}`,
          'content-type': 'application/json',
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    uploadUserPhoto: build.mutation({
      query: ({ image, token }) => ({
        url: 'user/avatar/',
        method: 'POST',
        body: image,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
})

export const {
  useAuthRegistrationMutation,
  useAuthLoginMutation,
  useUpdateUserTokenMutation,
  useGetCurrentUserQuery,
  useEditCurrentUserMutation,
  useUploadUserPhotoMutation,
} = userApi

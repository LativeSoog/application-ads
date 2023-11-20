import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DATA_TAG = { type: 'Adverts', id: 'LIST' }

export const advertApi = createApi({
  reducerPath: 'advertApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
  }),
  endpoints: (build) => ({
    getAllAdverts: build.query({
      query: () => ({
        url: 'ads/',
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    getCurrentAdvert: build.query({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
  }),
})

export const { useGetAllAdvertsQuery, useGetCurrentAdvertQuery } = advertApi

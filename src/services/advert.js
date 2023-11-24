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

    getAdvertsCurrentUser: build.query({
      query: (token) => ({
        url: 'ads/me/',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

    addTextAdvert: build.mutation({
      query: ({ titleAdvert, descriptionAdvert, priceAdvert, token }) => ({
        url: 'adstext/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          title: titleAdvert,
          description: descriptionAdvert,
          price: priceAdvert,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    addImgAdvert: build.mutation({
      query: ({
        titleAdvert,
        descriptionAdvert,
        priceAdvert,
        images,
        token,
      }) => ({
        url: 'ads/',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          title: titleAdvert,
          description: descriptionAdvert,
          price: priceAdvert,
          files: images,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    deleteAdvert: build.mutation({
      query: ({ id, token }) => ({
        url: `/ads/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    getCommentsAdvert: build.query({
      query: (id) => ({
        url: `ads/${id}/comments`,
        method: 'GET',
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),

    addCommentAdvert: build.mutation({
      query: ({ id, textAddComment, token }) => ({
        url: `ads/${id}/comments`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          text: textAddComment,
        },
      }),
      providesTags: (result = []) => [DATA_TAG],
    }),
  }),
})

export const {
  useGetAllAdvertsQuery,
  useGetAdvertsCurrentUserQuery,
  useGetCurrentAdvertQuery,
  useAddTextAdvertMutation,
  useAddImgAdvertMutation,
  useDeleteAdvertMutation,
  useGetCommentsAdvertQuery,
  useAddCommentAdvertMutation,
} = advertApi

import { configureStore } from '@reduxjs/toolkit'
import { advertApi } from '../services/advert'

export const store = configureStore({
  reducer: {
    [advertApi.reducerPath]: advertApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advertApi.middleware),
})

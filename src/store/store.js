import { configureStore } from '@reduxjs/toolkit'
import { advertApi } from '../services/advert'
import { userApi } from '../services/user'

export const store = configureStore({
  reducer: {
    [advertApi.reducerPath]: advertApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([advertApi.middleware, userApi.middleware]),
})

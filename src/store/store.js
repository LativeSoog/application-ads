import { configureStore } from '@reduxjs/toolkit'
import { advertApi } from '../services/advert'
import { userApi } from '../services/user'
import UsersReducer from './reducers/users'
import AdvertsReducer from './reducers/adverts'

export const store = configureStore({
  reducer: {
    AdvUsers: UsersReducer,
    Adverts: AdvertsReducer,
    [advertApi.reducerPath]: advertApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([advertApi.middleware, userApi.middleware]),
})

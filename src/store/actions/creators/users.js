import { SET_USER_DATA, SET_USER_TOKEN } from '../type/users'

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
})

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: token,
})

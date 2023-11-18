import { SET_USER_DATA } from '../type/users'

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
})

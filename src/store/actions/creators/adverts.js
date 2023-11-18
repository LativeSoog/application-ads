import { SET_FILTER_ADVERTS } from '../type/adverts'

export const setFilterAdverts = (filter) => ({
  type: SET_FILTER_ADVERTS,
  payload: filter,
})

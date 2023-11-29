import { SET_FILTER_ADVERTS, SET_FILTER_ADVERTS_LIST } from '../type/adverts'

export const setFilterAdverts = (filter) => ({
  type: SET_FILTER_ADVERTS,
  payload: filter,
})

export const setFilterAdvertsList = (advertsList) => ({
  type: SET_FILTER_ADVERTS_LIST,
  payload: advertsList,
})

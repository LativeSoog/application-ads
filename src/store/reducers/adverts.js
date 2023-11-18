import {
  SET_FILTER_ADVERTS,
  SET_FILTER_ADVERTS_LIST,
} from '../actions/type/adverts'

export const initialState = {
  filteredAdverts: {
    status: false,
    textSearchAdvert: false,
  },
  filteredListAdverts: {},
}

export default function AdvertsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_ADVERTS:
      return {
        ...state,
        filteredAdverts: action.payload,
      }

    case SET_FILTER_ADVERTS_LIST:
      return {
        ...state,
        filteredListAdverts: action.payload,
      }

    default:
      return state
  }
}

import { SET_FILTER_ADVERTS } from '../actions/type/adverts'

export const initialState = {
  filteredAdverts: {
    status: false,
    textSearchAdvert: false,
  },
}

export default function AdvertsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_ADVERTS:
      return {
        ...state,
        filteredAdverts: {
          status: true,
          textSearchAdvert: action.payload,
        },
      }

    default:
      return state
  }
}

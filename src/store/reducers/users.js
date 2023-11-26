import { SET_USER_DATA, SET_USER_TOKEN } from '../actions/type/users'

const initialState = {
  userData: false,
  userToken: false,
}

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      }

    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      }

    default:
      return state
  }
}

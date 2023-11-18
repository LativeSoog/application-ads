import { SET_USER_DATA } from '../actions/type/users'

const initialState = {
  userData: false,
}

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      }

    default:
      return state
  }
}

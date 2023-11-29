const usersSelector = (store) => store.AdvUsers

export const currentUser = (store) => usersSelector(store)?.userData
export const userToken = (store) => usersSelector(store)?.userToken

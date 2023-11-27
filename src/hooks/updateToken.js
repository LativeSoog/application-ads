import { useDispatch } from 'react-redux'
import { useUpdateUserTokenMutation } from '../services/user'
import { setUserToken } from '../store/actions/creators/users'

export const useUpdateToken = () => {
  const [updateUserToken] = useUpdateUserTokenMutation()
  const dispatch = useDispatch()

  const updateToken = async ({ accessToken, refreshToken }) => {
    try {
      const response = await updateUserToken({ accessToken, refreshToken })

      if (response.data) {
        localStorage.setItem('token_user', JSON.stringify(response.data))
        dispatch(setUserToken(response.data))
        return response.data
      }

      if (response.error) {
        switch (response.error.status) {
          case 401:
            throw new Error('Произошла ошибка, попробуйте позднее')
        }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  return updateToken
}

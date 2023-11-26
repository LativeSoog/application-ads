import { useEffect, useState } from 'react'
import * as S from './style'
import {
  useAuthLoginMutation,
  useAuthRegistrationMutation,
  useGetCurrentUserQuery,
} from '../../services/user'
import { setUserData } from '../../store/actions/creators/users'
import { useDispatch } from 'react-redux'

export const Authorization = ({ closeModalWindow }) => {
  const dispatch = useDispatch()
  const [regMode, setRegMode] = useState(false)
  const [token, setToken] = useState(false)

  const [errorMessage, setErrorMessage] = useState(false)
  const [isFormProcess, setIsFormProcess] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userCity, setUserCity] = useState('')

  const [userRegistration, { error: errorUserRegistration }] =
    useAuthRegistrationMutation()
  const [userLogin] = useAuthLoginMutation()
  const { data: userData } = useGetCurrentUserQuery(token)

  useEffect(() => {
    if (token) {
      dispatch(setUserData(userData))
      localStorage.setItem('user', JSON.stringify(userData))
      closeModalWindow()
    }
  }, [userData])

  const checkAndRegistration = async () => {
    try {
      setIsFormProcess(true)
      await userRegistration({
        email,
        password,
        userName,
        userSurname,
        userCity,
      })
      closeWindow()
    } catch (error) {
      setErrorMessage(errorUserRegistration)
    } finally {
      setIsFormProcess(false)
    }
  }

  const handleRegister = () => {
    if (!email) {
      setErrorMessage('Укажите email адрес')
      return
    }
    if (!password) {
      setErrorMessage('Укажите пароль')
      return
    }
    if (password !== repeatPassword) {
      setErrorMessage('Указанные пароли не совпадают')
      return
    } else {
      checkAndRegistration()
    }
  }

  const checkAndLogin = async () => {
    try {
      const responseLogin = await userLogin({ email, password })

      if (responseLogin.data) {
        setToken(responseLogin.data.access_token)
        localStorage.setItem('token_user', JSON.stringify(responseLogin.data))
      }

      if (responseLogin.error) {
        switch (responseLogin.error.status) {
          case 401:
            throw new Error('Данный пользователь не зарегистрирован')

          case 422:
            throw new Error('Пожалуйста, укажите корректный Email')
        }
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  const handleLogin = () => {
    if (!email) {
      setErrorMessage('Укажите email адрес')
      return
    }
    if (!password) {
      setErrorMessage('Укажите пароль')
      return
    } else {
      checkAndLogin()
    }
  }

  const switchButtonRegMode = () => {
    setRegMode(true)
  }

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalBtnClosedSvg onClick={closeModalWindow}>
          <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
        </S.ModalBtnClosedSvg>

        <S.ModalLogo>
          <S.ModalLogoImg src="/img/logo_modal.png" />
        </S.ModalLogo>
        {regMode ? (
          <>
            <S.ModalInput
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              $marginBottom={'38px'}
            />
            <S.ModalInput
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              $marginBottom={'38px'}
            />
            <S.ModalInput
              type="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(e) => {
                setRepeatPassword(e.target.value)
              }}
              $marginBottom={'38px'}
            />
            <S.ModalInput
              type="text"
              placeholder="Имя (необязательно)"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              $marginBottom={'38px'}
            />
            <S.ModalInput
              type="text"
              placeholder="Фамилия (необязательно)"
              value={userSurname}
              onChange={(e) => {
                setUserSurname(e.target.value)
              }}
              $marginBottom={'38px'}
            />
            <S.ModalInput
              type="text"
              placeholder="Город (необязательно)"
              value={userCity}
              onChange={(e) => {
                setUserCity(e.target.value)
              }}
              $marginBottom={'38px'}
            />
            {errorMessage && (
              <S.ModalInfoMessage $colorText={'#750000'}>
                {errorMessage}
              </S.ModalInfoMessage>
            )}
            <S.ModalBtnEnter
              onClick={handleRegister}
              disabled={isFormProcess}
              $marginTop={'30px'}
              $marginBottom={'0'}
            >
              {isFormProcess ? 'Регистрация...' : 'Зарегистрироваться'}
            </S.ModalBtnEnter>
          </>
        ) : (
          <>
            <S.ModalInput
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <S.ModalInput
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              $marginTop={'30px'}
            />
            {errorMessage && (
              <S.ModalInfoMessage $colorText={`#750000`}>
                {errorMessage}
              </S.ModalInfoMessage>
            )}
            <S.ModalBtnEnter $marginTop={'60px'} onClick={handleLogin}>
              Войти
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp onClick={switchButtonRegMode}>
              Зарегистрироваться
            </S.ModalBtnSignUp>
          </>
        )}
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

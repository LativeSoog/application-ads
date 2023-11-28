import { useState } from 'react'
import { Authorization } from '../Authorization/Authorization'
import * as S from './style'
import { AddAdvert } from '../ModalsAdvert/AddAdvert'
import { currentUser } from '../../store/selectors/users'
import { useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'

export const Header = () => {
  const [isModalAuth, setIsModalAuth] = useState(false)
  const [isModalAddAdvert, setIsModalAddAdvert] = useState(false)
  const [isModalLogout, setIsModalLogout] = useState(false)
  const isUser = useSelector(currentUser)

  const handleOpenModalAuth = () => {
    setIsModalAuth(true)
    document.body.style.overflow = 'hidden'
  }

  const handleOpenModalAddAdv = () => {
    setIsModalAddAdvert(true)
    document.body.style.overflow = 'hidden'
  }

  const handleOpenModalLogout = () => {
    setIsModalLogout(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModalWindow = () => {
    if (isModalAuth) {
      setIsModalAuth(false)
      document.body.style.overflow = 'unset'
    }

    if (isModalAddAdvert) {
      setIsModalAddAdvert(false)
      document.body.style.overflow = 'unset'
    }

    if (isModalLogout) {
      setIsModalLogout(false)
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <>
      {isModalAuth && <Authorization closeModalWindow={closeModalWindow} />}
      {isModalAddAdvert && <AddAdvert closeModalWindow={closeModalWindow} />}
      {isModalLogout && <Logout closeModalWindow={closeModalWindow} />}

      <S.Header>
        <S.HeaderNav>
          {isUser ? (
            <>
              <S.HeaderButtonMain
                $width="232px"
                onClick={handleOpenModalAddAdv}
              >
                Разместить объявление
              </S.HeaderButtonMain>
              <S.HeaderButtonLink to="/profile">
                <S.HeaderButtonMain $width="173px" $marginLeft="10px">
                  Личный кабинет
                </S.HeaderButtonMain>
              </S.HeaderButtonLink>
              <S.HeaderButtonLogout
                $width="120px"
                $marginLeft="10px"
                onClick={handleOpenModalLogout}
              >
                <use xlinkHref="/img/icon/sprite.svg#icon-logout"></use>
              </S.HeaderButtonLogout>
            </>
          ) : (
            <S.HeaderButtonMain onClick={handleOpenModalAuth} $width="224px">
              Вход в личный кабинет
            </S.HeaderButtonMain>
          )}
        </S.HeaderNav>
      </S.Header>
    </>
  )
}

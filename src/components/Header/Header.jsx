import { useState } from 'react'
import { Authorization } from '../Authorization/Authorization'
import * as S from './style'
import { AddAdvert } from '../ModalsAdvert/AddAdvert'
import { currentUser } from '../../store/selectors/users'
import { useSelector } from 'react-redux'

export const Header = () => {
  const [openAuthForm, setOpenAuthForm] = useState(false)
  const [openAddAdvert, setOpenAddAdvert] = useState(false)
  const isUser = useSelector(currentUser)

  const handleAuthMode = () => {
    setOpenAuthForm(true)
    document.body.style.overflow = 'hidden'
  }

  const handleAddAdvert = () => {
    setOpenAddAdvert(true)
    document.body.style.overflow = 'hidden'
  }

  const closeWindow = () => {
    setOpenAuthForm(false)
    setOpenAddAdvert(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {openAuthForm ? (
        <Authorization closeWindow={closeWindow} />
      ) : (
        ''
      )}
      {openAddAdvert ? <AddAdvert closeWindow={closeWindow} /> : ''}
      <S.Header>
        <S.HeaderNav>
          {isUser ? (
            <>
              <S.HeaderButtonMain $width="232px" onClick={handleAddAdvert}>
                Разместить объявление
              </S.HeaderButtonMain>
              <S.HeaderButtonLink to="/profile">
                <S.HeaderButtonMain $width="173px" $marginLeft="10px">
                  Личный кабинет
                </S.HeaderButtonMain>
              </S.HeaderButtonLink>
            </>
          ) : (
            <S.HeaderButtonMain onClick={handleAuthMode} $width="224px">
              Вход в личный кабинет
            </S.HeaderButtonMain>
          )}
        </S.HeaderNav>
      </S.Header>
    </>
  )
}

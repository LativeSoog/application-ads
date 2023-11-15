import { useState } from 'react'
import { Authorization } from '../Authorization/Authorization'
import * as S from './style'

export const Header = () => {
  const [openAuthForm, setOpenAuthForm] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const handleAuthMode = () => {
    setOpenAuthForm(true)
    document.body.style.overflow = 'hidden'
  }

  const closeWindow = () => {
    setOpenAuthForm(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {openAuthForm ? <Authorization closeWindow={closeWindow} /> : ''}
      <S.Header>
        <S.HeaderNav>
          {isLogin ? (
            <>
              <S.HeaderButtonLink to="/profile">
                <S.HeaderButtonMain $width="232px">
                  Разместить объявление
                </S.HeaderButtonMain>
              </S.HeaderButtonLink>
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

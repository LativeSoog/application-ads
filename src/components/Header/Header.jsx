import { useState } from 'react'
import { Authorization } from '../Authorization/Authorization'
import * as S from './style'

export const Header = () => {
  const [openAuthForm, setOpenAuthForm] = useState(false)

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
          <S.HeaderButtonMain onClick={handleAuthMode}>
            Вход в личный кабинет
          </S.HeaderButtonMain>
        </S.HeaderNav>
      </S.Header>
    </>
  )
}

import { useState } from 'react'
import { Authorization } from '../Authorization/Authorization'
import { AddAdvert } from '../ModalsAdvert/AddAdvert'
import * as S from './style'
import { useSelector } from 'react-redux'
import { currentUser } from '../../store/selectors/users'
import { Link } from 'react-router-dom'

export const Footer = () => {
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

      <S.Footer>
        <S.FooterContainer>
          <S.FooterImgBlock>
            <S.FooterLink to={'/'}>
              <S.FooterImg src="/img/icon_01.png" />
            </S.FooterLink>
          </S.FooterImgBlock>

          <S.FooterImgCenterButton $display={isUser}>
            <S.FooterImgBlock onClick={() => handleOpenModalAddAdv()}>
              <S.FooterLink>
                <S.FooterImg src="/img/icon_02.png" />
              </S.FooterLink>
            </S.FooterImgBlock>
          </S.FooterImgCenterButton>

          <S.FooterImgBlock>
            <S.FooterLink
              as={isUser ? Link : 'div'}
              to={isUser ? '/profile' : undefined}
              onClick={isUser ? undefined : () => handleOpenModalAuth()}
            >
              <S.FooterImg src="/img/icon_03.png" />
            </S.FooterLink>
          </S.FooterImgBlock>
        </S.FooterContainer>
      </S.Footer>
    </>
  )
}

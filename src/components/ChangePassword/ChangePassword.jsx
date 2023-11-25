import { useState } from 'react'
import * as S from './style'

export const ChangePassword = ({ closeModalWindow }) => {
  const [infoMessage, setInfoMessage] = useState('')
  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalBtnClosedSvg onClick={closeModalWindow}>
          <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
        </S.ModalBtnClosedSvg>
        <S.ModalLogo>
          <S.ModalLogoImg src="/img/logo_modal.png" />
        </S.ModalLogo>
        <S.ModalTitle>Изменение пароля</S.ModalTitle>

        <S.ModalInput type="password" placeholder="Укажите текущий пароль" />
        <S.ModalInput type="password" placeholder="Укажите новый пароль" />

        {infoMessage && <S.ModalInfoMessage>{infoMessage}</S.ModalInfoMessage>}

        <S.ModalBtnEnter>Сохранить</S.ModalBtnEnter>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

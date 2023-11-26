import { useState } from 'react'
import * as S from './style'
import { useChangeUserPasswordMutation } from '../../services/user'

export const ChangePassword = ({ closeModalWindow, token }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [changePassword] = useChangeUserPasswordMutation()

  const handleUpdatePassword = async () => {
    if (newPassword.length < 5) {
      setErrorMessage('Минимальная длина пароля - 5 символов')
      return
    }

    try {
      const response = await changePassword({
        currentPassword,
        newPassword,
        token: token?.access_token,
      })

      if (!response.error) {
        setErrorMessage('')
        setSuccessMessage('Пароль успешно изменён')
      } else {
        switch (response.error.status) {
          case 400:
            throw new Error('Неверно указан текущий пароль')
        }
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
    }
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
        <S.ModalTitle>Изменение пароля</S.ModalTitle>

        <S.ModalInput
          type="password"
          placeholder="Укажите текущий пароль"
          onChange={(e) => {
            setCurrentPassword(e.target.value)
          }}
        />
        <S.ModalInput
          type="password"
          placeholder="Укажите новый пароль"
          onChange={(e) => setNewPassword(e.target.value)}
        />

        {errorMessage && (
          <S.ModalInfoMessage $colorText={'#750000'}>
            {errorMessage}
          </S.ModalInfoMessage>
        )}
        {successMessage && (
          <S.ModalInfoMessage $colorText={'#007500'}>
            {successMessage}
          </S.ModalInfoMessage>
        )}

        {successMessage ? (
          <S.ModalBtnEnter onClick={closeModalWindow}>Закрыть</S.ModalBtnEnter>
        ) : (
          <S.ModalBtnEnter onClick={handleUpdatePassword}>
            Сохранить
          </S.ModalBtnEnter>
        )}
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

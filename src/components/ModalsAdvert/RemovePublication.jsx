import { useDispatch, useSelector } from 'react-redux'
import { useDeleteAdvertMutation } from '../../services/advert'
import * as S from './RemovePublicationStyle'
import { userToken } from '../../store/selectors/users'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { setUserToken } from '../../store/actions/creators/users'

export const RemovePublication = ({ closeModalWindow, id }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(userToken)

  const [errorToken, setErrorToken] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const [deleteAdvert] = useDeleteAdvertMutation()

  const handleDeleteAdvert = async () => {
    try {
      const response = deleteAdvert({ id, token: token.access_token })

      if (!response.data) {
        setSuccessMessage(true)
        document.body.style.overflow = 'unset'
      }

      if (response.error) {
        switch (response.error.status) {
          case 401:
            setErrorToken(true)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (errorToken) {
      const handleUpdateToken = async () => {
        try {
          const response = await updateToken({
            accessToken: token.access_token,
            refreshToken: token.refresh_token,
          })
          if (response) {
            dispatch(setUserToken(response))
            handleDeleteAdvert()
          }
        } catch (error) {
          console.error('Ошибка обновления токена: ', error)
        } finally {
          setErrorToken(false)
        }
      }
      handleUpdateToken()
    }
  }, [errorToken])

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        {successMessage ? (
          <>
            <S.ModalBtnClosedContainer onClick={() => navigate('/')}>
              <S.ModalBtnClosedSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-close"></use>
              </S.ModalBtnClosedSvg>
            </S.ModalBtnClosedContainer>
            <S.ModalTitle>Cнятие с публикации</S.ModalTitle>
            <S.ModalText>Объявлено успешно удалено</S.ModalText>

            <S.ModalBtnContainer>
              <S.ModalBtnEnter onClick={() => navigate('/')}>
                Вернуться на главную
              </S.ModalBtnEnter>
            </S.ModalBtnContainer>
          </>
        ) : (
          <>
            <S.ModalBtnClosedContainer onClick={closeModalWindow}>
              <S.ModalBtnClosedSvg>
                <use xlinkHref="/img/icon/sprite.svg#icon-close"></use>
              </S.ModalBtnClosedSvg>
            </S.ModalBtnClosedContainer>
            <S.ModalTitle>Cнятие с публикации</S.ModalTitle>
            <S.ModalText>
              Вы уверены, что хотите снять объявление с публикации?
            </S.ModalText>
            <S.ModalBtnContainer>
              <S.ModalBtnEnter onClick={handleDeleteAdvert}>
                Подтвердить
              </S.ModalBtnEnter>
              <S.ModalBtnClosed onClick={closeModalWindow}>
                Отменить
              </S.ModalBtnClosed>
            </S.ModalBtnContainer>
          </>
        )}
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

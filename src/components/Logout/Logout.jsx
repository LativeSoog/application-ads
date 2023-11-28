import { useDispatch, useSelector } from 'react-redux'
import * as S from './style'
import { setUserData, setUserToken } from '../../store/actions/creators/users'

export const Logout = ({ closeModalWindow }) => {
  const dispatch = useDispatch()

  const handleButtonLogout = () => {
    localStorage.clear()
    dispatch(setUserData(false))
    dispatch(setUserToken(false))
    closeModalWindow()
  }

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalBtnClosedContainer onClick={closeModalWindow}>
          <S.ModalBtnClosedSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
          </S.ModalBtnClosedSvg>
        </S.ModalBtnClosedContainer>

        <S.ModalTitle>Вы уверены, что хотите выйти?</S.ModalTitle>
        <S.ModalBtnContainer>
          <S.ModalBtnEnter onClick={handleButtonLogout}>
            Подтвердить
          </S.ModalBtnEnter>
          <S.ModalBtnClosed onClick={closeModalWindow}>
            Отменить
          </S.ModalBtnClosed>
        </S.ModalBtnContainer>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

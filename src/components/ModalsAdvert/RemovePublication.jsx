import * as S from './RemovePublicationStyle'

export const RemovePublication = ({ closeModalWindow }) => {
  return (
    <S.ModalWrapper>
      <S.ModalContent>
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
          <S.ModalBtnEnter>Подтвердить</S.ModalBtnEnter>
          <S.ModalBtnClosed>Отменить</S.ModalBtnClosed>
        </S.ModalBtnContainer>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}

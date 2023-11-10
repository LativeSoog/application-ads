import * as S from './style'

export const Authorization = ({ closeWindow }) => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalBlockClosedSvg onClick={closeWindow}>
            <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
          </S.ModalBlockClosedSvg>
          <S.ModalFormLogin>
            <S.ModalFormLogo>
              <S.ModalFormLogoImg src="/img/logo_modal.png" />
            </S.ModalFormLogo>
            <S.ModalFormInput type="text" placeholder="email" />
            <S.ModalFormInput
              type="password"
              placeholder="Пароль"
              $marginTop={'30px'}
            />
            <S.ModalFormButtonEnter>
              <S.ModalFormButtonEnterLink>Войти</S.ModalFormButtonEnterLink>
            </S.ModalFormButtonEnter>
            <S.ModalFormButtonSignUp>
              <S.ModalFormButtonSignUpLink>
                Зарегистрироваться
              </S.ModalFormButtonSignUpLink>
            </S.ModalFormButtonSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

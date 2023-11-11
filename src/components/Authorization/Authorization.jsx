import { useState } from 'react'
import * as S from './style'

export const Authorization = ({ closeWindow }) => {
  const [regMode, setRegMode] = useState(false)

  const switchButtonRegMode = () => {
    setRegMode(true)
  }

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock $height={regMode ? '647px' : '439px'}>
          <S.ModalBlockClosedSvg onClick={closeWindow}>
            <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
          </S.ModalBlockClosedSvg>
          <S.ModalFormLogin $height={regMode ? '647px' : '439px'}>
            <S.ModalFormLogo>
              <S.ModalFormLogoImg src="/img/logo_modal.png" />
            </S.ModalFormLogo>
            {regMode ? (
              <>
                <S.ModalFormInput
                  type="text"
                  placeholder="email"
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="password"
                  placeholder="Пароль"
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="password"
                  placeholder="Повторите пароль"
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="text"
                  placeholder="Имя (необязательно)"
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="text"
                  placeholder="Фамилия (необязательно)"
                  $marginBottom={'38px'}
                />
                <S.ModalFormInput
                  type="text"
                  placeholder="Город (необязательно)"
                  $marginBottom={'38px'}
                />
                <S.ModalFormButtonEnter $marginTop={'30px'} $marginBottom={'0'}>
                  <S.ModalFormButtonEnterLink>
                    Зарегистрироваться
                  </S.ModalFormButtonEnterLink>
                </S.ModalFormButtonEnter>
              </>
            ) : (
              <>
                <S.ModalFormInput type="text" placeholder="email" />
                <S.ModalFormInput
                  type="password"
                  placeholder="Пароль"
                  $marginTop={'30px'}
                />
                <S.ModalFormButtonEnter $marginTop={'60px'}>
                  <S.ModalFormButtonEnterLink>Войти</S.ModalFormButtonEnterLink>
                </S.ModalFormButtonEnter>
                <S.ModalFormButtonSignUp>
                  <S.ModalFormButtonSignUpLink onClick={switchButtonRegMode}>
                    Зарегистрироваться
                  </S.ModalFormButtonSignUpLink>
                </S.ModalFormButtonSignUp>
              </>
            )}
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

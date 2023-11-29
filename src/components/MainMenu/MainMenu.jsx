import * as S from './style'

export const MainMenu = () => {
  return (
    <S.MainMenu>
      <S.MainMenuLogoLink to={'/'}>
        <S.MainMenuLogoImg src="/img/logo.png" />
      </S.MainMenuLogoLink>
      <S.MainMenuForm>
        <S.MainMenuFormBtnLink to={'/'}>
          <S.MainMenuFormBtn>Вернуться на&nbsp;главную</S.MainMenuFormBtn>
        </S.MainMenuFormBtnLink>
      </S.MainMenuForm>
    </S.MainMenu>
  )
}

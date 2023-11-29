import { useDispatch } from 'react-redux'
import * as S from './style'
import { setFilterAdverts } from '../../store/actions/creators/adverts'

export const MainMenu = () => {
  const dispatch = useDispatch()

  return (
    <S.MainMenu>
      <S.MainMenuLogoLink to={'/'}>
        <S.MainMenuLogoImg src="/img/logo.png" />
      </S.MainMenuLogoLink>
      <S.MainMenuForm>
        <S.MainMenuFormBtnLink to={'/'}>
          <S.MainMenuFormBtn onClick={() => dispatch(setFilterAdverts(false))}>
            Вернуться на&nbsp;главную
          </S.MainMenuFormBtn>
        </S.MainMenuFormBtnLink>
      </S.MainMenuForm>
    </S.MainMenu>
  )
}

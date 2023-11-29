import { MainMenu } from '../../components/MainMenu/MainMenu'
import * as S from './style'

export const NotFound = () => {
  return (
    <S.MainContainer>
      <MainMenu />
      <S.MainBlock>
        <S.MainImage src="/img/404.png" />
        <S.MainTitle>Страница не найдена</S.MainTitle>
      </S.MainBlock>
    </S.MainContainer>
  )
}

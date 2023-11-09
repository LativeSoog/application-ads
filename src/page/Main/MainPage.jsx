import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'

export const MainPage = () => {
  return (
    <S.Main>
      <S.MainSearch>
        <S.MainSearchLogoLink>
          <S.MainSearchLogoLinkImg src="/img/logo.png" />
        </S.MainSearchLogoLink>

        <S.MainSearchForm>
          <S.MainSearchFormText placeholder="Поиск по объявлениям" />
          <S.MainSearchFormBtn>Найти</S.MainSearchFormBtn>
        </S.MainSearchForm>
      </S.MainSearch>

      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <S.MainContent>
          <S.Cards>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </S.Cards>
        </S.MainContent>
      </S.MainContainer>
    </S.Main>
  )
}

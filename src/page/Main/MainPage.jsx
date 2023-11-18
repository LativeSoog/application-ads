import { CardItem } from '../../components/CardItem/CardItem'
import { useGetAllAdvertsQuery } from '../../services/advert'
import * as S from './style'

export const MainPage = () => {
  const { data: advertList, error: advertError } = useGetAllAdvertsQuery()

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
            {advertList?.map((advert) => {
              return (
                <CardItem
                  key={advert.id}
                  nameItem={advert.title}
                  priceItem={advert.price}
                  cityItem={advert.user.city}
                  dateItem={advert.created_on}
                  imgItem={advert.images[0]?.url}
                />
              )
            })}
          </S.Cards>
        </S.MainContent>
      </S.MainContainer>
    </S.Main>
  )
}

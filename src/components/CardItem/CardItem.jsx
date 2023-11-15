import * as S from './style'

export const CardItem = () => {
  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardImage>
          <S.CardLink to="/advert">
            <S.CardImageImg />
          </S.CardLink>
        </S.CardImage>

        <S.CardContent>
          <S.CardLink to="/advert">
            <S.CardContentTitle>
              Ракетка для большого тенниса Triumph Pro ST
            </S.CardContentTitle>
          </S.CardLink>

          <S.CardContentPrice>2&nbsp;200&nbsp;₽</S.CardContentPrice>
          <S.CardContentPlace>Санкт Петербур</S.CardContentPlace>
          <S.CardContentDate>Сегодня в&nbsp;10:45</S.CardContentDate>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  )
}

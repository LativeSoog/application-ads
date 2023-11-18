import * as S from './style'

export const CardItem = ({
  linkItem,
  nameItem,
  priceItem,
  cityItem,
  dateItem,
  imgItem,
}) => {
  const imgItemLink = 'http://127.0.0.1:8090/' + imgItem

  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardImage>
          <S.CardLink to={linkItem}>
            <S.CardImageImg src={imgItemLink} />
          </S.CardLink>
        </S.CardImage>

        <S.CardContent>
          <S.CardLink to={linkItem}>
            <S.CardContentTitle>{nameItem}</S.CardContentTitle>
          </S.CardLink>

          <S.CardContentPrice>{priceItem}&nbsp;₽</S.CardContentPrice>
          <S.CardContentPlace>{cityItem}</S.CardContentPlace>
          <S.CardContentDate>{dateItem}</S.CardContentDate>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  )
}

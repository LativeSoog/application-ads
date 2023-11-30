import { host } from '../../helper'
import * as S from './style'
import { useDateFormatter } from '../../hooks/dateFormat'

export const CardItem = ({
  linkItem,
  nameItem,
  priceItem,
  cityItem,
  dateItem,
  imgItem,
}) => {
  const { dateFormatter } = useDateFormatter()

  const imgItemLink = imgItem ? host + imgItem : '/img/no-photo.jpg'

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
          <S.CardContentDate>{dateFormatter(dateItem)}</S.CardContentDate>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  )
}

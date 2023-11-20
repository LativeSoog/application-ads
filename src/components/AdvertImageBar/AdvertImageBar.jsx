import * as S from './style'

export const AdvertImageBar = ({ link }) => {
  return (
    <S.AdvertImgBarDiv>
      <S.AdvertImgBarImage src={link} />
    </S.AdvertImgBarDiv>
  )
}

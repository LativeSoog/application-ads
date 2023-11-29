import * as S from './style'

export const AdvertImageBar = ({ link, setCurrentImageAdvert }) => {
  return (
    <S.AdvertImgBarDiv>
      <S.AdvertImgBarImage
        src={link}
        onClick={() => setCurrentImageAdvert(link)}
      />
    </S.AdvertImgBarDiv>
  )
}

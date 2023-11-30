import * as S from './style'

export const AdvertImageBar = ({
  link,
  setCurrentImageAdvert,
  currentImageUrl,
}) => {
  return (
    <S.AdvertImgBarDiv $currentBorder={link === currentImageUrl}>
      <S.AdvertImgBarImage
        src={link}
        onClick={() => setCurrentImageAdvert(link)}
      />
    </S.AdvertImgBarDiv>
  )
}

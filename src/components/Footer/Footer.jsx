import * as S from './style'

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImgBlock>
          <S.FooterLink to={'/'}>
            <S.FooterImg src="/img/icon_01.png" />
          </S.FooterLink>
        </S.FooterImgBlock>

        <S.FooterImgBlock>
          <S.FooterLink>
            <S.FooterImg src="/img/icon_02.png" />
          </S.FooterLink>
        </S.FooterImgBlock>

        <S.FooterImgBlock>
          <S.FooterLink to={'/profile'}>
            <S.FooterImg src="/img/icon_03.png" />
          </S.FooterLink>
        </S.FooterImgBlock>
      </S.FooterContainer>
    </S.Footer>
  )
}

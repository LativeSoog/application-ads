import { useParams } from 'react-router-dom'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'

export const ProfileSellerPage = () => {
  const params = useParams()

  return (
    <S.MainContainer>
      <S.MainCenterBlock>
        <S.MainMenu>
          <S.MainMenuLogoLink to={'/'}>
            <S.MainMenuLogoImg src="/img/logo.png" />
          </S.MainMenuLogoLink>
          <S.MainMenuForm>
            <S.MainMenuFormBtnLink to={'/'}>
              <S.MainMenuFormBtn>Вернуться на&nbsp;главную</S.MainMenuFormBtn>
            </S.MainMenuFormBtnLink>
          </S.MainMenuForm>
        </S.MainMenu>

        <S.MainTitleH2>Профиль продавца</S.MainTitleH2>

        <S.MainProfile>
          <S.ProfileContent>
            <S.ProfileSeller>
              <S.ProfileSellerLeft>
                <S.ProfileSellerImgBlock>
                  <S.ProfileLink>
                    <S.ProfileSellerImgBlockImage src="" />
                  </S.ProfileLink>
                </S.ProfileSellerImgBlock>
              </S.ProfileSellerLeft>

              <S.ProfileSellerRight>
                <S.ProfileSellerTitle>Кирилл Матвеев</S.ProfileSellerTitle>
                <S.ProfileSellerCity>Астана</S.ProfileSellerCity>
                <S.ProfileSellerInfo>
                  Продает товары с августа 2021
                </S.ProfileSellerInfo>

                <S.ProfileSellerBtn>
                  Показать&nbsp;телефон
                  <S.ProfileSellerBtnSpan>
                    8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                  </S.ProfileSellerBtnSpan>
                </S.ProfileSellerBtn>
              </S.ProfileSellerRight>
            </S.ProfileSeller>
          </S.ProfileContent>
        </S.MainProfile>

        <S.ProfileTitle>Товары продавца</S.ProfileTitle>
      </S.MainCenterBlock>

      <S.MainContent>
        <S.ContentCards>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </S.ContentCards>
      </S.MainContent>
    </S.MainContainer>
  )
}

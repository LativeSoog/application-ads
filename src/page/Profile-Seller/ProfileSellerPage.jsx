import { useParams } from 'react-router-dom'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'
import { useGetAllAdvertsQuery } from '../../services/advert'
import { useEffect, useState } from 'react'
import { formatDate } from '../../helper'
import { ButtonPhone } from '../../components/ButtonPhoneAdvert/ButtonPhone'

export const ProfileSellerPage = () => {
  const host = 'http://127.0.0.1:8090/'
  const params = useParams()
  const [profileSeller, setProfileSeller] = useState(false)

  const { data: usersAdvertData } = useGetAllAdvertsQuery()

  useEffect(() => {
    if (usersAdvertData) {
      const findUser = usersAdvertData.find(
        (userAdvert) => String(userAdvert.user.id) === params.id,
      )
      setProfileSeller(findUser.user)
    }
  })

  console.log(profileSeller)

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
                    <S.ProfileSellerImgBlockImage
                      src={
                        profileSeller.avatar ? host + profileSeller.avatar : ''
                      }
                    />
                  </S.ProfileLink>
                </S.ProfileSellerImgBlock>
              </S.ProfileSellerLeft>

              <S.ProfileSellerRight>
                <S.ProfileSellerTitle>
                  {profileSeller.name}
                </S.ProfileSellerTitle>
                <S.ProfileSellerCity>{profileSeller.city}</S.ProfileSellerCity>
                <S.ProfileSellerInfo>
                  Продает товары с {formatDate(profileSeller.sells_from)}
                </S.ProfileSellerInfo>

                <ButtonPhone userPhoneNumber={profileSeller.phone} />
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

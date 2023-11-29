import { useNavigate, useParams } from 'react-router-dom'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'
import { useGetAllAdvertsQuery } from '../../services/advert'
import { useEffect, useState } from 'react'
import { formatDateSells, host } from '../../helper'
import { ButtonPhone } from '../../components/ButtonPhoneAdvert/ButtonPhone'

export const ProfileSellerPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [profileSeller, setProfileSeller] = useState(false)
  const [advertsSeller, setAdvertsSeller] = useState([])

  const { data: allAdvertsData, isLoading: loadingAdverts } =
    useGetAllAdvertsQuery()

  useEffect(() => {
    if (allAdvertsData) {
      const findUser = allAdvertsData.find(
        (user) => String(user.user.id) === params.id,
      )
      if (findUser) {
        setProfileSeller(findUser.user)
      } else {
        return navigate('/not-found')
      }

      const findUserAdverts = allAdvertsData.filter(
        (userAdverts) => String(userAdverts.user_id) === params.id,
      )
      setAdvertsSeller(findUserAdverts)
    }
  }, [allAdvertsData])

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
                        profileSeller.avatar
                          ? host + profileSeller.avatar
                          : '/img/no-photo.jpg'
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
                  Продает товары с {formatDateSells(profileSeller.sells_from)}
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
          {advertsSeller.map((advert) => {
            return (
              <CardItem
                key={advert.id}
                linkItem={`/advert/${advert.id}`}
                nameItem={advert.title}
                priceItem={advert.price}
                cityItem={advert.user.city}
                dateItem={advert.created_on}
                imgItem={advert.images[0]?.url}
              />
            )
          })}
        </S.ContentCards>
      </S.MainContent>
    </S.MainContainer>
  )
}

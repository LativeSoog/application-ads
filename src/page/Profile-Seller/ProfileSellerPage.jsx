import { useNavigate, useParams } from 'react-router-dom'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'
import { useGetAllAdvertsQuery } from '../../services/advert'
import { useEffect, useState } from 'react'
import { formatDateSells, host } from '../../helper'
import { ButtonPhone } from '../../components/ButtonPhoneAdvert/ButtonPhone'
import { useDateFormatter } from '../../hooks/dateFormat'
import { MainMenu } from '../../components/MainMenu/MainMenu'

export const ProfileSellerPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { dateSellsFormatter } = useDateFormatter()
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
        <MainMenu />

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
                  Продает товары с{' '}
                  {dateSellsFormatter(profileSeller.sells_from)}
                </S.ProfileSellerInfo>

                <S.ProfileSellerBlockMobile>
                  <S.ProfileSellerImgBlockMobile>
                    <S.ProfileSellerImgBlockImageMobile
                      src={
                        profileSeller.avatar
                          ? host + profileSeller.avatar
                          : '/img/no-photo.jpg'
                      }
                    />
                  </S.ProfileSellerImgBlockMobile>
                </S.ProfileSellerBlockMobile>

                {profileSeller.phone && (
                  <ButtonPhone userPhoneNumber={profileSeller.phone} />
                )}
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

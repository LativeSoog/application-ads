import { useState } from 'react'
import { AdvertImageBar } from '../../components/AdvertImageBar/AdvertImageBar'
import * as S from './style'
import { ReviewsAdvert } from '../../components/ModalsAdvert/ReviewsAdvert'
import { useParams } from 'react-router-dom'
import { useGetCurrentAdvertQuery } from '../../services/advert'

export const AdvertPage = () => {
  const host = 'http://127.0.0.1:8090/'
  const params = useParams()
  const [openReviews, setOpenReviews] = useState(false)

  const { data: currentAdvertData, isLoading: currentAdvertLoading } =
    useGetCurrentAdvertQuery(params.id)

  console.log(currentAdvertData)

  const handleOpenReview = () => {
    setOpenReviews(true)
    document.body.style.overflow = 'hidden'
  }

  const closeWindow = () => {
    setOpenReviews(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      {openReviews ? (
        <ReviewsAdvert closeWindow={closeWindow} />
      ) : (
        <>
          <S.MainContainer>
            <S.MainMenu>
              <S.MainMenuLogoLink to={'/'}>
                <S.MainMenuLogoImg src="/img/logo.png" />
              </S.MainMenuLogoLink>
              <S.MainMenuForm>
                <S.MainMenuFormBtnLink to={'/'}>
                  <S.MainMenuFormBtn>
                    Вернуться на&nbsp;главную
                  </S.MainMenuFormBtn>
                </S.MainMenuFormBtnLink>
              </S.MainMenuForm>
            </S.MainMenu>
          </S.MainContainer>

          {currentAdvertLoading ? (
            'Идёт загрузка'
          ) : (
            <>
              <S.MainAdvert>
                <S.AdvertContent>
                  <S.AdvertLeft>
                    <S.AdvertLeftFillImg>
                      <S.AdvertLeftImgBlock>
                        <S.AdvertLeftImgBlockImage
                          src={
                            currentAdvertData.images[0]
                              ? host + currentAdvertData.images[0].url
                              : ''
                          }
                        />
                      </S.AdvertLeftImgBlock>

                      <S.AdvertImgBar>
                        {currentAdvertData?.images.map((image) => {
                          return (
                            <AdvertImageBar
                              key={image.id}
                              link={host + image.url}
                            />
                          )
                        })}
                      </S.AdvertImgBar>
                    </S.AdvertLeftFillImg>
                  </S.AdvertLeft>

                  <S.AdvertRight>
                    <S.AdvertRightBlock>
                      <S.AdvertRightBlockTitle>
                        {currentAdvertData.title}
                      </S.AdvertRightBlockTitle>
                      <S.AdvertRightBlockInfo>
                        <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                          {currentAdvertData.created_on}
                        </S.AdvertRightBlockInfoItem>
                        <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                          {currentAdvertData.user.city}
                        </S.AdvertRightBlockInfoItem>
                        <S.AdvertRightBlockInfoLink>
                          <S.AdvertRightBlockInfoItem
                            $color="#009EE4"
                            onClick={handleOpenReview}
                          >
                            23 отзыва
                          </S.AdvertRightBlockInfoItem>
                        </S.AdvertRightBlockInfoLink>
                      </S.AdvertRightBlockInfo>

                      <S.AdvertRightBlockPrice>
                        {currentAdvertData.price}
                      </S.AdvertRightBlockPrice>

                      <S.AdvertRightBlockBtn>
                        Показать&nbsp;телефон
                        <S.AdvertRightBlockBtnSpan>
                          8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                        </S.AdvertRightBlockBtnSpan>
                      </S.AdvertRightBlockBtn>

                      <S.AdvertRightBlockAuthor>
                        <S.AdvertRightBlockAuthorImgBlock>
                          <S.AdvertRightBlockAuthorImgBlockImage
                            src={
                              currentAdvertData.user.avatar
                                ? host + currentAdvertData.user.avatar
                                : ''
                            }
                          />
                        </S.AdvertRightBlockAuthorImgBlock>

                        <S.AdvertRightBlockAuthorContact>
                          <S.MainMenuFormBtnLink to="/profile-seller">
                            <S.AdvertRightBlockAuthorContactName>
                              {currentAdvertData.user.name}
                            </S.AdvertRightBlockAuthorContactName>
                          </S.MainMenuFormBtnLink>
                          <S.AdvertRightBlockAuthorContactAbout>
                            Продает товары с{currentAdvertData.user.sells_from}
                          </S.AdvertRightBlockAuthorContactAbout>
                        </S.AdvertRightBlockAuthorContact>
                      </S.AdvertRightBlockAuthor>
                    </S.AdvertRightBlock>
                  </S.AdvertRight>
                </S.AdvertContent>
              </S.MainAdvert>
              <S.MainContainer>
                <S.MainTitle>Описание товара</S.MainTitle>

                <S.MainContent>
                  <S.MainText>
                    {currentAdvertData.description
                      ? currentAdvertData.description
                      : 'Пользователь не указал описание к данному объявлению'}
                  </S.MainText>
                </S.MainContent>
              </S.MainContainer>
            </>
          )}
        </>
      )}
    </>
  )
}

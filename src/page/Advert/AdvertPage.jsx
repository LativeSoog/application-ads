import { useEffect, useState } from 'react'
import { AdvertImageBar } from '../../components/AdvertImageBar/AdvertImageBar'
import * as S from './style'
import { ReviewsAdvert } from '../../components/ModalsAdvert/ReviewsAdvert'
import { useParams } from 'react-router-dom'
import {
  useDeleteAdvertMutation,
  useGetCommentsAdvertQuery,
  useGetCurrentAdvertQuery,
} from '../../services/advert'
import { ButtonPhone } from '../../components/ButtonPhoneAdvert/ButtonPhone'
import { formatDateAndTime, formatDateSells } from '../../helper'
import { useSelector } from 'react-redux'
import { currentUser } from '../../store/selectors/users'
import { useUpdateUserTokenMutation } from '../../services/user'
import { EditAdvert } from '../../components/ModalsAdvert/EditAdvert'
import { current } from '@reduxjs/toolkit'

export const AdvertPage = () => {
  const host = 'http://127.0.0.1:8090/'
  const params = useParams()
  const user = useSelector(currentUser)
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token_user')),
  )
  const [modalWindowReview, setModalWindowReview] = useState(false)
  const [modalWindowEditAdvert, setModalWindowEditAdvert] = useState(false)

  const [deleteAdvert] = useDeleteAdvertMutation()
  const [updateUserToken] = useUpdateUserTokenMutation()
  const {
    data: currentAdvertData,
    isLoading: currentAdvertLoading,
    refetch: currentAdvertDataRefetch,
  } = useGetCurrentAdvertQuery(params.id)
  const { data: advertComments } = useGetCommentsAdvertQuery(params.id)

  useEffect(() => {
    const getUpdateUserToken = async () => {
      try {
        const responseNewToken = await updateUserToken({
          accessToken: token.access_token,
          refreshToken: token.refresh_token,
        })

        if (responseNewToken.data) {
          localStorage.setItem(
            'token_user',
            JSON.stringify(responseNewToken.data),
          )
          setToken(responseNewToken.data)
        }

        if (responseNewToken.error) {
          switch (responseNewToken.error.status) {
            case 401:
              throw new Error(
                ' Произошла ошибка. Пожалуйста, авторизируйтесь заново',
              )
          }
        }
      } catch (error) {
        setErrorMessage(error.message)
      }
    }
    getUpdateUserToken()
  }, [])

  const handleDeleteAdvert = async () => {
    try {
      const responseDelAdvert = await deleteAdvert({
        id: params.id,
        token: token.access_token,
      })

      console.log(responseDelAdvert)
    } catch (error) {}
  }

  const handleOpenReview = () => {
    setModalWindowReview(true)
    document.body.style.overflow = 'hidden'
  }

  const handleOpenEdit = () => {
    setModalWindowEditAdvert(true)
  }

  const closeWindow = () => {
    if (modalWindowReview) {
      setModalWindowReview(false)
      document.body.style.overflow = 'unset'
    }

    if (modalWindowEditAdvert) {
      setModalWindowEditAdvert(false)
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <>
      {modalWindowEditAdvert && (
        <EditAdvert
          closeWindow={closeWindow}
          token={token}
          id={params.id}
          currentTitle={currentAdvertData.title}
          currentDescription={currentAdvertData.description}
          currentPrice={currentAdvertData.price}
          currentImages={currentAdvertData.images}
          advertDataRefetch={currentAdvertDataRefetch}
        />
      )}
      {modalWindowReview ? (
        <ReviewsAdvert closeWindow={closeWindow} params={params} />
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
                          {formatDateAndTime(currentAdvertData.created_on)}
                        </S.AdvertRightBlockInfoItem>
                        <S.AdvertRightBlockInfoItem $color="#5F5F5F">
                          {currentAdvertData.user.city}
                        </S.AdvertRightBlockInfoItem>
                        <S.AdvertRightBlockInfoLink>
                          <S.AdvertRightBlockInfoItem
                            $color="#009EE4"
                            onClick={handleOpenReview}
                          >
                            {advertComments?.length} отзыва
                          </S.AdvertRightBlockInfoItem>
                        </S.AdvertRightBlockInfoLink>
                      </S.AdvertRightBlockInfo>

                      <S.AdvertRightBlockPrice>
                        {currentAdvertData.price}
                      </S.AdvertRightBlockPrice>
                      {currentAdvertData.user_id === user.id &&
                      currentAdvertData.user.email === user.email ? (
                        <S.AdvertRightButtonBlock>
                          <S.AdvertRightButton
                            $width="189px"
                            $marginRight="10px"
                            onClick={handleOpenEdit}
                          >
                            Редактировать
                          </S.AdvertRightButton>
                          <S.AdvertRightButton
                            $width="225px"
                            onClick={handleDeleteAdvert}
                          >
                            Снять с публикации
                          </S.AdvertRightButton>
                        </S.AdvertRightButtonBlock>
                      ) : (
                        <ButtonPhone
                          userPhoneNumber={currentAdvertData.user.phone}
                        />
                      )}

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
                          <S.MainMenuFormBtnLink
                            to={`/profile-seller/${currentAdvertData.user.id}`}
                          >
                            <S.AdvertRightBlockAuthorContactName>
                              {currentAdvertData.user.name}
                            </S.AdvertRightBlockAuthorContactName>
                          </S.MainMenuFormBtnLink>
                          <S.AdvertRightBlockAuthorContactAbout>
                            Продает товары с{' '}
                            {formatDateSells(currentAdvertData.user.sells_from)}
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

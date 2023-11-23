import { useEffect, useState } from 'react'
import { formatDateAndTime, host } from '../../helper'
import {
  useAddCommentAdvertMutation,
  useGetCommentsAdvertQuery,
} from '../../services/advert'
import * as S from './ReviewsAdvertStyle'
import { useUpdateUserTokenMutation } from '../../services/user'

export const ReviewsAdvert = ({ closeWindow, params }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token_user')),
  )
  const [errorMessageComment, setErrorMessageComment] = useState(false)
  const [textAddComment, setTextAddComment] = useState('')
  const {
    data: advertComments,
    isLoading: advertCommentsLoading,
    refetch: advertCommentsRefetch,
  } = useGetCommentsAdvertQuery(params.id)

  const [updateUserToken] = useUpdateUserTokenMutation()
  const [addComment] = useAddCommentAdvertMutation()

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
                'Произошла ошибка. Пожалуйста, авторизируйтесь заново',
              )
            //localStorage.clear()
          }
        }
      } catch (error) {
        setErrorMessage(error.message)
      }
    }
    getUpdateUserToken()
  }, [])

  const handleAddComment = async () => {
    if (textAddComment.length > 1) {
      try {
        const responseAddComment = await addComment({
          textAddComment,
          id: params.id,
          token: token.access_token,
        })

        if (responseAddComment.data) {
          await advertCommentsRefetch()
          setTextAddComment('')
        }

        if (responseAddComment.error) {
          throw new Error('Произошла ошибка, попробуйте позже')
        }
      } catch (error) {
        setErrorMessageComment(error.message)
      }
    } else {
      setErrorMessageComment(
        'Комментарий не должен быть пустым или содержать менее 2-х символов',
      )
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalContentTitle>Отзывы о товаре</S.ModalContentTitle>
            <S.ModalContentBtnClose onClick={closeWindow}>
              <S.ModalContentBtnCloseLine />
            </S.ModalContentBtnClose>

            <S.ModalScroll>
              <S.ModalFormNewRew id="formNewRew">
                <S.ModalFormNewRewBlock>
                  <S.ModalFormNewRewLabel htmlFor="formArea">
                    Добавить отзыв
                  </S.ModalFormNewRewLabel>
                  {errorMessageComment}
                  <S.ModalFormNewRewArea
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                    onChange={(e) => {
                      setTextAddComment(e.target.value)
                    }}
                    value={textAddComment}
                  />
                </S.ModalFormNewRewBlock>
                <S.ModalFormNewRewBtn
                  onClick={handleAddComment}
                  $buttonActive={textAddComment}
                >
                  Опубликовать
                </S.ModalFormNewRewBtn>
              </S.ModalFormNewRew>

              <S.ModalReviews>
                {advertCommentsLoading
                  ? 'Комментарии загружаются, пожалуйста подождите'
                  : advertComments.length > 0
                  ? advertComments.map((comment) => {
                      return (
                        <Review
                          key={comment.id}
                          imgUser={`${host}${comment.author.avatar}`}
                          nameUser={comment.author.name}
                          dateComment={comment.created_on}
                          textComment={comment.text}
                        />
                      )
                    })
                  : 'Комментариев нет'}
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}

export const Review = ({ imgUser, nameUser, dateComment, textComment }) => {
  return (
    <S.Review>
      <S.ReviewItem>
        <S.ReviewItemLeft>
          <S.ReviewItemLeftImgBlock>
            <S.ReviewItemLeftImage src={imgUser} />
          </S.ReviewItemLeftImgBlock>
        </S.ReviewItemLeft>
        <S.ReviewItemRight>
          <S.ReviewItemRightName>
            {nameUser}
            <S.ReviewItemRightNameSpan>
              {formatDateAndTime(dateComment)}
            </S.ReviewItemRightNameSpan>
          </S.ReviewItemRightName>
          <S.ReviewItemRightTitle>Комментарий</S.ReviewItemRightTitle>
          <S.ReviewItemRightText>{textComment}</S.ReviewItemRightText>
        </S.ReviewItemRight>
      </S.ReviewItem>
    </S.Review>
  )
}

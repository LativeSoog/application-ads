import { useEffect, useState } from 'react'
import { formatDateAndTime, host } from '../../helper'
import {
  useAddCommentAdvertMutation,
  useGetCommentsAdvertQuery,
} from '../../services/advert'
import * as S from './ReviewsAdvertStyle'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser, userToken } from '../../store/selectors/users'
import { useUpdateToken } from '../../hooks/updateToken'
import { setUserToken } from '../../store/actions/creators/users'

export const ReviewsAdvert = ({ closeModalWindow, params }) => {
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  const token = useSelector(userToken)
  const updateToken = useUpdateToken()

  const [errorToken, setErrorToken] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [textAddComment, setTextAddComment] = useState('')

  const {
    data: advertComments,
    isLoading: advertCommentsLoading,
    refetch: advertCommentsRefetch,
  } = useGetCommentsAdvertQuery(params.id)
  const [addComment] = useAddCommentAdvertMutation()

  const handleAddComment = async () => {
    if (textAddComment.length < 2) {
      return setErrorMessage(
        'Комментарий не должен быть пустым или содержать менее 2-х символов',
      )
    }

    try {
      const response = await addComment({
        textAddComment,
        id: params.id,
        token: token.access_token,
      })

      if (response.data) {
        await advertCommentsRefetch()
        setTextAddComment('')
        setErrorMessage(false)
      }

      if (response.error) {
        switch (response.error.status) {
          case 401:
            setErrorToken(true)
        }
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  useEffect(() => {
    if (errorToken) {
      const handleUpdateToken = async () => {
        try {
          const response = await updateToken({
            accessToken: token.access_token,
            refreshToken: token.refresh_token,
          })
          if (response) {
            dispatch(setUserToken(response))
            handleAddComment()
          }
        } catch (error) {
          console.error('Ошибка обновления токена: ', error)
        } finally {
          setErrorToken(false)
        }
      }
      handleUpdateToken()
    }
  }, [errorToken])

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalContentTitle>Отзывы о товаре</S.ModalContentTitle>
        <S.ModalBtnClosedContainer>
          <S.ModalBtnClosedSvg onClick={closeModalWindow}>
            <use xlinkHref="/img/icon/sprite.svg#icon-close"></use>
          </S.ModalBtnClosedSvg>
        </S.ModalBtnClosedContainer>

        <S.ModalScroll>
          {user ? (
            <S.ModalFormNewRew>
              {errorMessage && (
                <S.ModalInfoMessage $colorText={'#750000'}>
                  {errorMessage}
                </S.ModalInfoMessage>
              )}
              <S.ModalFormNewRewBlock>
                <S.ModalFormNewRewLabel htmlFor="formArea">
                  Добавить отзыв
                </S.ModalFormNewRewLabel>
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
                $buttonActive={textAddComment.length > 1}
              >
                Опубликовать
              </S.ModalFormNewRewBtn>
            </S.ModalFormNewRew>
          ) : (
            <S.ModalInfoMessage $colorText={'#000'}>
              Только авторизованные пользователи могут оставлять комментарии
            </S.ModalInfoMessage>
          )}

          <S.ModalReviews>
            {advertCommentsLoading
              ? 'Комментарии загружаются, пожалуйста подождите'
              : advertComments.length > 0
              ? advertComments.map((comment) => {
                  return (
                    <Review
                      key={comment.id}
                      imgUser={
                        comment.author.avatar
                          ? `${host}${comment.author.avatar}`
                          : `/img/no-photo.jpg`
                      }
                      nameUser={comment.author.name}
                      dateComment={comment.created_on}
                      textComment={comment.text}
                    />
                  )
                })
              : 'Комментариев пока нет'}
          </S.ModalReviews>
        </S.ModalScroll>
      </S.ModalContent>
    </S.ModalWrapper>
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

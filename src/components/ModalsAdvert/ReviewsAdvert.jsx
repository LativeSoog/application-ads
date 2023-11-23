import { host } from '../../helper'
import { useGetCommentsAdvertQuery } from '../../services/advert'
import * as S from './ReviewsAdvertStyle'

export const ReviewsAdvert = ({ closeWindow, params }) => {
  const { data: advertComments, isLoading: advertCommentsLoading } =
    useGetCommentsAdvertQuery(params.id)

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
                  <S.ModalFormNewRewArea
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  />
                </S.ModalFormNewRewBlock>
                <S.ModalFormNewRewBtn>Опубликовать</S.ModalFormNewRewBtn>
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
            <S.ReviewItemRightNameSpan>{dateComment}</S.ReviewItemRightNameSpan>
          </S.ReviewItemRightName>
          <S.ReviewItemRightTitle>Комментарий</S.ReviewItemRightTitle>
          <S.ReviewItemRightText>{textComment}</S.ReviewItemRightText>
        </S.ReviewItemRight>
      </S.ReviewItem>
    </S.Review>
  )
}

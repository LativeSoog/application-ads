import * as S from './ReviewsAdvertStyle'

export const ReviewsAdvert = ({ closeWindow }) => {
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
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}

export const Review = () => {
  return (
    <S.Review>
      <S.ReviewItem>
        <S.ReviewItemLeft>
          <S.ReviewItemLeftImgBlock>
            <S.ReviewItemLeftImage />
          </S.ReviewItemLeftImgBlock>
        </S.ReviewItemLeft>
        <S.ReviewItemRight>
          <S.ReviewItemRightName>
            Олег
            <S.ReviewItemRightNameSpan>14 августа</S.ReviewItemRightNameSpan>
          </S.ReviewItemRightName>
          <S.ReviewItemRightTitle>Комментарий</S.ReviewItemRightTitle>
          <S.ReviewItemRightText>Lorem ipsum</S.ReviewItemRightText>
        </S.ReviewItemRight>
      </S.ReviewItem>
    </S.Review>
  )
}

import * as S from './AddAdvertStyle'

export const AddAdvert = ({ closeWindow }) => {
  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalContentTitle>Новое объявление</S.ModalContentTitle>
            <S.ModalContentBtnClose onClick={closeWindow}>
              <S.ModalContentBtnCloseLine />
            </S.ModalContentBtnClose>

            <S.ModalFormNewAdv id="formNewAdv">
              <S.ModalFormNewAdvBlock>
                <S.ModalFormNewAdvLabel htmlFor="formName">
                  Название
                </S.ModalFormNewAdvLabel>
                <S.ModalFormNewAdvInput
                  type="text"
                  id="formName"
                  placeholder="Введите название"
                />
              </S.ModalFormNewAdvBlock>

              <S.ModalFormNewAdvBlock>
                <S.ModalFormNewAdvLabel htmlFor="formArea">
                  Описание
                </S.ModalFormNewAdvLabel>
                <S.ModalFormNewAdvArea
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                />
              </S.ModalFormNewAdvBlock>

              <S.ModalFormNewAdvBlock>
                <S.ModalFormNewAdvPhoto>
                  Фотографии товара
                  <S.ModalNewAdvPhotoSpan>
                    не более 5 фотографий
                  </S.ModalNewAdvPhotoSpan>
                </S.ModalFormNewAdvPhoto>
                <S.ModalFormNewAdvBarImg>
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                </S.ModalFormNewAdvBarImg>
              </S.ModalFormNewAdvBlock>

              <S.ModalFormNewAdvBlockPrice>
                <S.ModalFormNewAdvLabel htmlFor="formPrice">
                  Цена
                </S.ModalFormNewAdvLabel>
                <S.ModalFormNewAdvInputPrice
                  type="text"
                  name="price"
                  id="formPrice"
                />
                <S.ModalFormNewAdvInputPriceCover />
              </S.ModalFormNewAdvBlockPrice>

              <S.ModalFormNewAdvBtn>Опубликовать</S.ModalFormNewAdvBtn>
            </S.ModalFormNewAdv>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}

export const AddAdvertPhoto = () => {
  return (
    <S.ModalFormNewAdvImgBlock>
      <S.ModalFormNewAdvImgBlockImage src="" />
      <S.ModalFormNewAdvImgBlockImageCover />
    </S.ModalFormNewAdvImgBlock>
  )
}

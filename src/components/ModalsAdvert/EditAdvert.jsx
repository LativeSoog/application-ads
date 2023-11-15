import * as S from './EditAdvertStyle'

export const EditAdvert = ({ closeWindow }) => {
  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalContentTitle>Редактировать обхявление</S.ModalContentTitle>
            <S.ModalContentBtnClose onClick={closeWindow}>
              <S.ModalContentBtnCloseLine />
            </S.ModalContentBtnClose>

            <S.ModalFormEditAdv id="FormEditAdv">
              <S.ModalFormEditAdvBlock>
                <S.ModalFormEditAdvLabel htmlFor="formName">
                  Название
                </S.ModalFormEditAdvLabel>
                <S.ModalFormEditAdvInput
                  type="text"
                  id="formName"
                  placeholder="Введите название"
                />
              </S.ModalFormEditAdvBlock>

              <S.ModalFormEditAdvBlock>
                <S.ModalFormEditAdvLabel htmlFor="formArea">
                  Описание
                </S.ModalFormEditAdvLabel>
                <S.ModalFormEditAdvArea
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                />
              </S.ModalFormEditAdvBlock>

              <S.ModalFormEditAdvBlock>
                <S.ModalFormEditAdvPhoto>
                  Фотографии товара
                  <S.ModalEditAdvPhotoSpan>
                    не более 5 фотографий
                  </S.ModalEditAdvPhotoSpan>
                </S.ModalFormEditAdvPhoto>
                <S.ModalFormEditAdvBarImg>
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                  <AddAdvertPhoto />
                </S.ModalFormEditAdvBarImg>
              </S.ModalFormEditAdvBlock>

              <S.ModalFormEditAdvBlockPrice>
                <S.ModalFormEditAdvLabel htmlFor="formPrice">
                  Цена
                </S.ModalFormEditAdvLabel>
                <S.ModalFormEditAdvInputPrice
                  type="text"
                  name="price"
                  id="formPrice"
                />
                <S.ModalFormEditAdvInputPriceCover />
              </S.ModalFormEditAdvBlockPrice>

              <S.ModalFormEditAdvBtn>Опубликовать</S.ModalFormEditAdvBtn>
            </S.ModalFormEditAdv>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}

export const AddAdvertPhoto = () => {
  return (
    <S.ModalFormEditAdvImgBlock>
      <S.ModalFormEditAdvImgBlockImage src="" />
      <S.ModalFormEditAdvImgBlockImageCover />
    </S.ModalFormEditAdvImgBlock>
  )
}

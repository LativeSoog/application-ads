import { useState } from 'react'
import * as S from './EditAdvertStyle'
import { useEditAdvertMutation } from '../../services/advert'

export const EditAdvert = ({
  closeWindow,
  token,
  id,
  currentTitle,
  currentDescription,
  currentPrice,
}) => {
  const [titleAdvert, setTitleAdvert] = useState(currentTitle)
  const [descriptionAdvert, setDescriptionAdvert] = useState(currentDescription)
  const [priceAdvert, setPriceAdvert] = useState(currentPrice)
  const [editAdvert] = useEditAdvertMutation()

  const handleAdvertEdit = async () => {
    try {
      const responseAdvertEdit = await editAdvert({
        id,
        token: token.access_token,
        titleAdvert,
        descriptionAdvert,
        priceAdvert,
      })

      console.log(responseAdvertEdit)
    } catch (error) {}
  }

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalContentTitle>Редактировать объявление</S.ModalContentTitle>
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
                  value={titleAdvert}
                  onChange={(e) => {
                    setTitleAdvert(e.target.value)
                  }}
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
                  value={descriptionAdvert}
                  onChange={(e) => {
                    setDescriptionAdvert(e.target.value)
                  }}
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
                  value={priceAdvert}
                  onChange={(e) => {
                    setPriceAdvert(e.target.value)
                  }}
                />
                <S.ModalFormEditAdvInputPriceCover />
              </S.ModalFormEditAdvBlockPrice>

              <S.ModalFormEditAdvBtn onClick={handleAdvertEdit}>
                Сохранить
              </S.ModalFormEditAdvBtn>
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

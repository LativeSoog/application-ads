import { useRef, useState } from 'react'
import * as S from './EditAdvertStyle'
import {
  useDeletePhotoAdvertMutation,
  useEditAdvertMutation,
  useUploadPhotoAdvertMutation,
} from '../../services/advert'
import { host } from '../../helper'

export const EditAdvert = ({
  closeModalWindow,
  token,
  id,
  currentTitle,
  currentDescription,
  currentPrice,
  currentImages,
  advertDataRefetch,
}) => {
  const [titleAdvert, setTitleAdvert] = useState(currentTitle)
  const [descriptionAdvert, setDescriptionAdvert] = useState(currentDescription)
  const [priceAdvert, setPriceAdvert] = useState(currentPrice)
  const [imagesAdvert, setImagesAdvert] = useState(currentImages)
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
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalContentTitle>Редактировать объявление</S.ModalContentTitle>
        <S.ModalBtnClosedContainer>
          <S.ModalBtnClosedSvg onClick={closeModalWindow}>
            <use xlinkHref="/img/icon/sprite.svg#icon-close"></use>
          </S.ModalBtnClosedSvg>
        </S.ModalBtnClosedContainer>

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
              {imagesAdvert.map((image) => {
                return (
                  <AddAdvertPhoto
                    mode="viewPhoto"
                    id={id}
                    token={token}
                    advertDataRefetch={advertDataRefetch}
                    setImagesAdvert={setImagesAdvert}
                    key={image.id}
                    link={host + image.url}
                    imageId={image.id}
                    imageUrl={image.url}
                  />
                )
              })}
              {imagesAdvert.length < 5 && (
                <AddAdvertPhoto
                  mode="uploadPhoto"
                  id={id}
                  token={token}
                  advertDataRefetch={advertDataRefetch}
                  setImagesAdvert={setImagesAdvert}
                  imagesAdvert={imagesAdvert}
                />
              )}
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
    </S.ModalWrapper>
  )
}

export const AddAdvertPhoto = ({
  mode,
  id,
  token,
  link,
  imageId,
  imageUrl,
  advertDataRefetch,
  imagesAdvert,
  setImagesAdvert,
}) => {
  const [uploadImageAdvert] = useUploadPhotoAdvertMutation()
  const [deleteImageAdvert] = useDeletePhotoAdvertMutation()
  const fileImageUploadRef = useRef(false)

  const handleUploadImage = async () => {
    const image = fileImageUploadRef?.current.files[0]
    const formData = new FormData()
    formData.append('file', image)

    try {
      const responseUploadImage = await uploadImageAdvert({
        id,
        token: token.access_token,
        image: formData,
      })

      if (responseUploadImage.data) {
        await advertDataRefetch()
        setImagesAdvert(responseUploadImage.data.images)
      }
    } catch (error) {}
  }

  const handleDeleteImage = async () => {
    try {
      const responseDeleteImage = await deleteImageAdvert({
        id,
        token: token.access_token,
        imageUrl: imageUrl,
      })

      if (responseDeleteImage.data) {
        await advertDataRefetch()
        setImagesAdvert(responseDeleteImage.data.images)
      }
    } catch (error) {}
  }

  return (
    <>
      <S.FileInput
        type="file"
        accept="image/*"
        ref={fileImageUploadRef}
        onChange={handleUploadImage}
      />

      {mode === 'viewPhoto' && (
        <S.ModalFormEditAdvImgBlock>
          <S.ModalFormEditAdvImgBlockImage src={link} />
          <S.ModalFormEditAdvImgBlockImageCover />
          <S.ModalFormEditAdvImgBlockDel onClick={handleDeleteImage}>
            ✖
          </S.ModalFormEditAdvImgBlockDel>
        </S.ModalFormEditAdvImgBlock>
      )}

      {mode === 'uploadPhoto' && imagesAdvert.length < 5 && (
        <S.ModalFormEditAdvImgBlock
          onClick={() => fileImageUploadRef.current.click()}
        >
          <S.ModalFormEditAdvImgBlockImage src={link} />
          <S.ModalFormEditAdvImgBlockImageCover />
        </S.ModalFormEditAdvImgBlock>
      )}
    </>
  )
}

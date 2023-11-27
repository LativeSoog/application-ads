import { useEffect, useRef, useState } from 'react'
import * as S from './EditAdvertStyle'
import {
  useDeletePhotoAdvertMutation,
  useEditAdvertMutation,
  useUploadPhotoAdvertMutation,
} from '../../services/advert'
import { host } from '../../helper'
import { useDispatch, useSelector } from 'react-redux'
import { userToken } from '../../store/selectors/users'
import { useUpdateToken } from '../../hooks/updateToken'
import { setUserToken } from '../../store/actions/creators/users'

export const EditAdvert = ({
  closeModalWindow,
  id,
  currentTitle,
  currentDescription,
  currentPrice,
  currentImages,
  advertDataRefetch,
}) => {
  const dispatch = useDispatch()
  const token = useSelector(userToken)
  const updateToken = useUpdateToken()

  const [errorToken, setErrorToken] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [titleAdvert, setTitleAdvert] = useState(currentTitle)
  const [descriptionAdvert, setDescriptionAdvert] = useState(currentDescription)
  const [priceAdvert, setPriceAdvert] = useState(currentPrice)
  const [imagesAdvert, setImagesAdvert] = useState(currentImages)
  const [editAdvert] = useEditAdvertMutation()

  const handleAdvertEdit = async () => {
    if (!titleAdvert) {
      return setErrorMessage('Укажите изменённое название')
    }

    if (!descriptionAdvert) {
      return setErrorMessage('Укажите изменённое описание')
    }

    if (!priceAdvert) {
      return setErrorMessage('Укажите изменённую стоимость')
    }

    try {
      const response = await editAdvert({
        id,
        token: token.access_token,
        titleAdvert,
        descriptionAdvert,
        priceAdvert,
      })

      if (response.data) {
        setErrorMessage(false)
        await advertDataRefetch()
        closeModalWindow()
      }

      if (response.error) {
        switch (response.error.status) {
          case 401:
            setErrorToken(true)
        }
      }
    } catch (error) {
      console.error(error)
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
            handleAdvertEdit()
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
        <S.ModalContentTitle>Редактировать объявление</S.ModalContentTitle>
        <S.ModalBtnClosedContainer>
          <S.ModalBtnClosedSvg onClick={closeModalWindow}>
            <use xlinkHref="/img/icon/sprite.svg#icon-close"></use>
          </S.ModalBtnClosedSvg>
        </S.ModalBtnClosedContainer>
        {errorMessage && (
          <S.ModalInfoMessage $colorText={'#750000'}>
            {errorMessage}
          </S.ModalInfoMessage>
        )}

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
                    imageUrl={image.url}
                    updateToken={updateToken}
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
                  updateToken={updateToken}
                />
              )}
            </S.ModalFormEditAdvBarImg>
          </S.ModalFormEditAdvBlock>

          <S.ModalFormEditAdvBlockPrice>
            <S.ModalFormEditAdvLabel htmlFor="formPrice">
              Цена
            </S.ModalFormEditAdvLabel>
            <S.ModalFormEditAdvInputPrice
              type="number"
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
  imageUrl,
  advertDataRefetch,
  imagesAdvert,
  setImagesAdvert,
  updateToken,
}) => {
  const dispatch = useDispatch()
  const fileImageUploadRef = useRef(false)

  const [errorToken, setErrorToken] = useState(false)

  const [uploadImageAdvert] = useUploadPhotoAdvertMutation()
  const [deleteImageAdvert] = useDeletePhotoAdvertMutation()

  const handleUploadImage = async () => {
    const image = fileImageUploadRef?.current.files[0]
    const formData = new FormData()
    formData.append('file', image)

    try {
      const response = await uploadImageAdvert({
        id,
        token: token.access_token,
        image: formData,
      })

      if (response.data) {
        await advertDataRefetch()
        setImagesAdvert(response.data.images)
      }

      if (response.error) {
        switch (response.error.status) {
          case 401:
            setErrorToken(true)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteImage = async () => {
    try {
      const response = await deleteImageAdvert({
        id,
        token: token.access_token,
        imageUrl: imageUrl,
      })

      if (response.data) {
        await advertDataRefetch()
        setImagesAdvert(response.data.images)
      }

      if (response.error) {
        switch (response.error.status) {
          case 401:
            setErrorToken(true)
        }
      }
    } catch (error) {
      console.error(error)
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
            if (mode === 'uploadPhoto') {
              handleUploadImage()
            } else {
              handleDeleteImage()
            }
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

import { useEffect, useState } from 'react'
import * as S from './AddAdvertStyle'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser, userToken } from '../../store/selectors/users'
import {
  useAddTextAdvertMutation,
  useGetAllAdvertsQuery,
} from '../../services/advert'
import { useNavigate } from 'react-router-dom'
import { useUpdateToken } from '../../hooks/updateToken'
import { setUserToken } from '../../store/actions/creators/users'

export const AddAdvert = ({ closeModalWindow }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  const token = useSelector(userToken)
  const updateToken = useUpdateToken()

  const [errorToken, setErrorToken] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [titleAdvert, setTitleAdvert] = useState('')
  const [descriptionAdvert, setDescriptionAdvert] = useState('')
  const [priceAdvert, setPriceAdvert] = useState('')
  const [idNewAdvert, setIdNewAdvert] = useState('')

  const [addTextAdvert] = useAddTextAdvertMutation()
  const { refetch: refetchAllAdverts } = useGetAllAdvertsQuery()

  const handleAddTextAdvert = async () => {
    if (!titleAdvert) {
      return setErrorMessage('Укажите название объявления')
    }

    if (!priceAdvert) {
      return setErrorMessage('Укажите цену объявления')
    }

    try {
      const response = await addTextAdvert({
        titleAdvert,
        descriptionAdvert,
        priceAdvert,
        token: token.access_token,
      })

      if (response.data) {
        setSuccessMessage(true)
        setIdNewAdvert(response.data.id)
        await refetchAllAdverts()
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
          dispatch(setUserToken(response))
          handleAddTextAdvert()
        } catch (error) {
          console.error('Ошибка обновление токена: ', error)
        } finally {
          setErrorToken(false)
        }
      }
      handleUpdateToken()
    }
  }, [errorToken])

  const handleGoAdvert = () => {
    navigate(`/advert/${idNewAdvert}`)
    closeModalWindow()
  }

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalContentTitle>Новое объявление</S.ModalContentTitle>
        <S.ModalBtnClosedSvg onClick={closeModalWindow}>
          <use xlinkHref="img/icon/sprite.svg#icon-close"></use>
        </S.ModalBtnClosedSvg>

        <S.ModalFormNewAdv>
          {successMessage ? (
            <S.ModalSuccessBlock>
              <S.ModalInfoMessage $colorText={'#007500'}>
                Объявление успешно создано
              </S.ModalInfoMessage>
              <S.ModalSuccessBtn onClick={handleGoAdvert}>
                Перейти к объявлению
              </S.ModalSuccessBtn>
            </S.ModalSuccessBlock>
          ) : (
            <>
              <S.ModalFormNewAdvBlock>
                <S.ModalFormNewAdvLabel htmlFor="formName">
                  Название
                </S.ModalFormNewAdvLabel>
                <S.ModalFormNewAdvInput
                  type="text"
                  id="formName"
                  placeholder="Введите название"
                  onChange={(e) => setTitleAdvert(e.target.value)}
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
                  onChange={(e) => setDescriptionAdvert(e.target.value)}
                />
              </S.ModalFormNewAdvBlock>

              {/* <S.ModalFormNewAdvBlock>
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
            </S.ModalFormNewAdvBlock> */}

              <S.ModalFormNewAdvBlockPrice>
                <S.ModalFormNewAdvLabel htmlFor="formPrice">
                  Цена
                </S.ModalFormNewAdvLabel>
                <S.ModalFormNewAdvInputPrice
                  type="number"
                  name="price"
                  id="formPrice"
                  onChange={(e) => setPriceAdvert(e.target.value)}
                />
                <S.ModalFormNewAdvInputPriceCover />
              </S.ModalFormNewAdvBlockPrice>

              {errorMessage && (
                <S.ModalInfoMessage $colorText={'#750000'}>
                  {errorMessage}
                </S.ModalInfoMessage>
              )}

              <S.ModalFormNewAdvBtn
                $condition={titleAdvert && priceAdvert}
                onClick={handleAddTextAdvert}
              >
                Опубликовать
              </S.ModalFormNewAdvBtn>
            </>
          )}
        </S.ModalFormNewAdv>
      </S.ModalContent>
    </S.ModalWrapper>
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

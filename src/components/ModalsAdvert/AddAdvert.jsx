import { useEffect, useRef, useState } from 'react'
import * as S from './AddAdvertStyle'
import { useSelector } from 'react-redux'
import { currentUser } from '../../store/selectors/users'
import { useUpdateUserTokenMutation } from '../../services/user'
import {
  useAddImgAdvertMutation,
  useAddTextAdvertMutation,
} from '../../services/advert'

export const AddAdvert = ({ closeWindow }) => {
  const user = useSelector(currentUser)
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token_user')),
  )
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [titleAdvert, setTitleAdvert] = useState('')
  const [descriptionAdvert, setDescriptionAdvert] = useState('')
  const [priceAdvert, setPriceAdvert] = useState('')

  const [updateUserToken] = useUpdateUserTokenMutation()
  const [addTextAdvert] = useAddTextAdvertMutation()
  // const [addImgAdvert] = useAddImgAdvertMutation()

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
                ' Произошла ошибка. Пожалуйста, авторизируйтесь заново',
              )
          }
        }
      } catch (error) {
        setErrorMessage(error.message)
      }
    }
    getUpdateUserToken()
  }, [])

  const postTextAdvert = async () => {
    try {
      const responsePostAdvert = await addTextAdvert({
        titleAdvert,
        descriptionAdvert,
        priceAdvert,
        token: token.access_token,
      })

      if (responsePostAdvert.data) {
        setSuccessMessage('Объявление успешно создано')
        setTimeout(() => {
          closeWindow()
        }, 3000)
      }

      if (responsePostAdvert.error) {
        switch (responsePostAdvert.error.status) {
          case 401:
            throw new Error(
              ' Произошла ошибка. Пожалуйста, авторизируйтесь заново',
            )
        }
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  }

  //Функционал добавления объявления с фото будет реализован позже
  // const postImgAdvert = async () => {
  //   const file = refFiles?.current.files[0]
  //   const formData = new FormData()
  //   formData.append('file', file)

  //   try {
  //     const responsePostAdvert = addImgAdvert({
  //       titleAdvert,
  //       descriptionAdvert,
  //       priceAdvert,
  //       images: formData,
  //       token: token.access_token,
  //     })

  //     if (responsePostAdvert.error) {
  //       console.log(responsePostAdvert.error)
  //     }

  //     console.log(responsePostAdvert)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            {errorMessage ? (
              errorMessage
            ) : successMessage ? (
              successMessage
            ) : (
              <>
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
                    {/* <S.ModalFormNewAdvPhotoUpload type="file" /> */}
                  </S.ModalFormNewAdvBlock>

                  <S.ModalFormNewAdvBlockPrice>
                    <S.ModalFormNewAdvLabel htmlFor="formPrice">
                      Цена
                    </S.ModalFormNewAdvLabel>
                    <S.ModalFormNewAdvInputPrice
                      type="text"
                      name="price"
                      id="formPrice"
                      onChange={(e) => setPriceAdvert(e.target.value)}
                    />
                    <S.ModalFormNewAdvInputPriceCover />
                  </S.ModalFormNewAdvBlockPrice>

                  <S.ModalFormNewAdvBtn onClick={postTextAdvert}>
                    Опубликовать
                  </S.ModalFormNewAdvBtn>
                </S.ModalFormNewAdv>
              </>
            )}
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

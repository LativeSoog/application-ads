import { useDispatch, useSelector } from 'react-redux'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'
import { currentUser, userToken } from '../../store/selectors/users'
import { useEffect, useRef, useState } from 'react'
import {
  useEditCurrentUserMutation,
  useUploadUserPhotoMutation,
} from '../../services/user'
import { setUserData, setUserToken } from '../../store/actions/creators/users'
import { useGetAdvertsCurrentUserQuery } from '../../services/advert'
import { ChangePassword } from '../../components/ChangePassword/ChangePassword'
import { MainMenu } from '../../components/MainMenu/MainMenu'
import { host } from '../../helper'
import { useUpdateToken } from '../../hooks/updateToken'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  const token = useSelector(userToken)
  const updateToken = useUpdateToken()
  const refFile = useRef(false)

  const [isModalChangePassword, setIsModalChangePassword] = useState(false)
  const [errorToken, setErrorToken] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [userName, setNameUser] = useState(user.name)
  const [userSurname, setSurnameUser] = useState(user.surname)
  const [userCity, setCityUser] = useState(user.city)
  const [userPhone, setPhoneUser] = useState(user.phone)
  const [isUploadPhoto, setIsUploadPhoto] = useState(false)
  const [isChangeProfile, setIsChangeProfile] = useState(false)

  const [editUserProfile] = useEditCurrentUserMutation()
  const [uploadAvatarProfile] = useUploadUserPhotoMutation()
  const {
    data: advertsCurrentUser,
    isLoading: loadingAdvertsUser,
    error: errorAdvertsCurrentUser,
    refetch: refetchAdvertsCurrentUser,
  } = useGetAdvertsCurrentUserQuery(token?.access_token)

  const closeModalWindow = () => {
    if (isModalChangePassword) {
      setIsModalChangePassword(false)
    }
  }

  const handleChangesProfile = async () => {
    if (!userName) {
      return setErrorMessage('Пожалуйста, укажите имя пользователя')
    }
    if (!userSurname) {
      return setErrorMessage('Пожалуйста, укажите фамилию пользователя')
    }
    if (!userCity) {
      return setErrorMessage('Пожалуйста, укажите город')
    }
    if (!userPhone) {
      return setErrorMessage('Пожалуйста, укажите телефон')
    }

    try {
      const response = await editUserProfile({
        userName,
        userSurname,
        userCity,
        userPhone,
        token: token.access_token,
      })

      if (response.data) {
        dispatch(setUserData(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
        setErrorMessage(false)
        setSuccessMessage(true)

        setTimeout(() => {
          setSuccessMessage(false)
        }, 5000)
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

  const handleUploadAvatar = async () => {
    const file = refFile?.current.files[0]
    const formData = new FormData()
    formData.append('file', file)
    setIsUploadPhoto(true)

    try {
      const response = await uploadAvatarProfile({
        image: formData,
        token: token.access_token,
      })

      if (response.data) {
        dispatch(setUserData(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
        setIsUploadPhoto(false)
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
    if (user && (errorToken || errorAdvertsCurrentUser)) {
      const handleUpdateToken = async () => {
        try {
          const response = await updateToken({
            accessToken: token.access_token,
            refreshToken: token.refresh_token,
          })
          if (response) {
            if (errorAdvertsCurrentUser?.data) {
              await refetchAdvertsCurrentUser()
            } else {
              dispatch(setUserToken(response))
              isUploadPhoto ? handleUploadAvatar() : handleChangesProfile()
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
  }, [errorToken, errorAdvertsCurrentUser])

  useEffect(() => {
    const isChangesProfile =
      userName !== user.name ||
      userSurname !== user.surname ||
      userCity !== user.city ||
      userPhone !== user.phone

    setIsChangeProfile(isChangesProfile)
  }, [
    userName,
    user.name,
    userSurname,
    user.surname,
    userCity,
    user.city,
    userPhone,
    user.phone,
  ])

  return (
    <S.MainWrapper $isModalChangePassword={isModalChangePassword}>
      <S.MainContainer>
        <S.MainCenterBlock>
          {isModalChangePassword && (
            <ChangePassword closeModalWindow={closeModalWindow} token={token} />
          )}

          <MainMenu />

          {user ? (
            <>
              <S.MainTitleH2>Здравствуйте, {user.name}!</S.MainTitleH2>

              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                  {errorMessage && (
                    <S.ModalInfoMessage $colorBackground={'#750000'}>
                      Произошла ошибка: {errorMessage}
                    </S.ModalInfoMessage>
                  )}
                  {successMessage && (
                    <S.ModalInfoMessage $colorBackground={'#019ee4'}>
                      Профиль успешно обновлён
                    </S.ModalInfoMessage>
                  )}
                  <S.ProfileSettings>
                    <S.ProfileSettingsLeft>
                      <S.ProfileSettingsImg>
                        <S.ProfileLink>
                          <S.ProfileSettingsImgImage
                            src={
                              user.avatar
                                ? host + user.avatar
                                : '/img/no-photo.jpg'
                            }
                          />
                        </S.ProfileLink>
                      </S.ProfileSettingsImg>
                      <S.ProfileSettingsChangePhoto
                        onClick={() => refFile.current.click()}
                      >
                        Заменить
                      </S.ProfileSettingsChangePhoto>

                      <S.ProfileSettingsPhotoUpload
                        type="file"
                        accept="image/*"
                        ref={refFile}
                        onChange={handleUploadAvatar}
                      />
                    </S.ProfileSettingsLeft>

                    <S.ProfileSettingsRight>
                      <S.ProfileSettingsForm>
                        <S.ProfileSettingsDiv>
                          <S.ProfileSettingsDivLabel>
                            Имя
                          </S.ProfileSettingsDivLabel>
                          <S.ProfileSettingsDivInput
                            width={'300px'}
                            placeholder="Укажите имя"
                            defaultValue={user.name}
                            onChange={(e) => setNameUser(e.target.value)}
                          />
                        </S.ProfileSettingsDiv>

                        <S.ProfileSettingsDiv>
                          <S.ProfileSettingsDivLabel>
                            Фамилия
                          </S.ProfileSettingsDivLabel>
                          <S.ProfileSettingsDivInput
                            width={'300px'}
                            placeholder="Укажите фамилию"
                            defaultValue={user.surname}
                            onChange={(e) => setSurnameUser(e.target.value)}
                          />
                        </S.ProfileSettingsDiv>

                        <S.ProfileSettingsDiv>
                          <S.ProfileSettingsDivLabel>
                            Город
                          </S.ProfileSettingsDivLabel>
                          <S.ProfileSettingsDivInput
                            width={'300px'}
                            placeholder="Укажите город"
                            defaultValue={user.city}
                            onChange={(e) => setCityUser(e.target.value)}
                          />
                        </S.ProfileSettingsDiv>

                        <S.ProfileSettingsDiv>
                          <S.ProfileSettingsDivBtn
                            onClick={() => setIsModalChangePassword(true)}
                          >
                            Сменить пароль
                          </S.ProfileSettingsDivBtn>
                        </S.ProfileSettingsDiv>

                        <S.ProfileSettingsDiv>
                          <S.ProfileSettingsDivLabel>
                            Телефон
                          </S.ProfileSettingsDivLabel>
                          <S.ProfileSettingsDivInputMask
                            width={'614px'}
                            placeholder="+7 (___) __-__-__"
                            mask="+7 (999) 999-99-99"
                            defaultValue={user.phone}
                            onChange={(e) => setPhoneUser(e.target.value)}
                          />
                        </S.ProfileSettingsDiv>
                        <S.ProfileSettingsBtn
                          onClick={() =>
                            isChangeProfile && handleChangesProfile()
                          }
                          $isChange={isChangeProfile}
                        >
                          Сохранить
                        </S.ProfileSettingsBtn>
                      </S.ProfileSettingsForm>
                    </S.ProfileSettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>

              <S.ProfileTitle>Мои товары</S.ProfileTitle>
            </>
          ) : (
            <S.ModalNoUserMessage>
              Чтобы просматривать профиль, войдите в личный кабинет
            </S.ModalNoUserMessage>
          )}
        </S.MainCenterBlock>

        {user ? (
          <S.MainContent>
            <S.ContentCards>
              {loadingAdvertsUser
                ? 'Объявления пользователя загружаются, пожалуйста подождите'
                : advertsCurrentUser?.length > 0
                ? advertsCurrentUser.map((advert) => {
                    return (
                      <CardItem
                        key={advert.id}
                        linkItem={`/advert/${advert.id}`}
                        nameItem={advert.title}
                        priceItem={advert.price}
                        cityItem={advert.user.city}
                        dateItem={advert.created_on}
                        imgItem={advert.images[0]?.url}
                      />
                    )
                  })
                : 'Объявления не найдены'}
            </S.ContentCards>
          </S.MainContent>
        ) : null}
      </S.MainContainer>
    </S.MainWrapper>
  )
}

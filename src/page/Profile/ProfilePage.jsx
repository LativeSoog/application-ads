import { useDispatch, useSelector } from 'react-redux'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'
import { currentUser } from '../../store/selectors/users'
import { useEffect, useState } from 'react'
import {
  useEditCurrentUserMutation,
  useUpdateUserTokenMutation,
} from '../../services/user'
import { setUserData } from '../../store/actions/creators/users'
import {
  useGetAdvertsCurrentUserQuery,
  useGetAllAdvertsQuery,
} from '../../services/advert'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem('token_user')),
  )
  const [userName, setNameUser] = useState(user.name)
  const [userSurname, setSurnameUser] = useState(user.surname)
  const [userCity, setCityUser] = useState(user.city)
  const [userPhone, setPhoneUser] = useState(user.phone)
  const [myAdverts, setMyAdverts] = useState([])

  const [updateUserToken] = useUpdateUserTokenMutation()
  const [editUserProfile] = useEditCurrentUserMutation()
  const { data: allAdvertsData, isLoading: loadingAdverts } =
    useGetAllAdvertsQuery()

  const saveButtonChanges = () => {
    getNewUserToken()
    updateUserProfileData()
  }

  const getNewUserToken = async () => {
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
        throw new Error(responseNewToken.error)
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
  }

  const updateUserProfileData = async () => {
    try {
      const responseUpdateData = await editUserProfile({
        userName,
        userSurname,
        userCity,
        userPhone,
        token: token.access_token,
      })

      if (responseUpdateData.data) {
        dispatch(setUserData(responseUpdateData.data))
        localStorage.setItem('user', JSON.stringify(responseUpdateData.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (allAdvertsData) {
      const findUserAdverts = allAdvertsData.filter(
        (userAdverts) => String(userAdverts.user_id) === user.id,
      )
      setMyAdverts(findUserAdverts)
    }
  }, [allAdvertsData])

  return (
    <S.MainContainer>
      <S.MainCenterBlock>
        <S.MainMenu>
          <S.MainMenuLogoLink to={'/'}>
            <S.MainMenuLogoImg src="/img/logo.png" />
          </S.MainMenuLogoLink>
          <S.MainMenuForm>
            <S.MainMenuFormBtnLink to={'/'}>
              <S.MainMenuFormBtn>Вернуться на&nbsp;главную</S.MainMenuFormBtn>
            </S.MainMenuFormBtnLink>
          </S.MainMenuForm>
        </S.MainMenu>

        <S.MainTitleH2>Здравствуйте, {user.name}</S.MainTitleH2>

        <S.MainProfile>
          <S.ProfileContent>
            <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
            <S.ProfileSettings>
              <S.ProfileSettingsLeft>
                <S.ProfileSettingsImg>
                  <S.ProfileLink>
                    <S.ProfileSettingsImgImage />
                  </S.ProfileLink>
                </S.ProfileSettingsImg>
                <S.ProfileSettingsChangePhoto>
                  Заменить
                </S.ProfileSettingsChangePhoto>
              </S.ProfileSettingsLeft>

              <S.ProfileSettingsRight>
                <S.ProfileSettingsForm>
                  <S.ProfileSettingsDiv>
                    <S.ProfileSettingsDivLabel>Имя</S.ProfileSettingsDivLabel>
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
                    <S.ProfileSettingsDivLabel>Город</S.ProfileSettingsDivLabel>
                    <S.ProfileSettingsDivInput
                      width={'300px'}
                      placeholder="Укажите город"
                      defaultValue={user.city}
                      onChange={(e) => setCityUser(e.target.value)}
                    />
                  </S.ProfileSettingsDiv>

                  <S.ProfileSettingsDiv>
                    <S.ProfileSettingsDivLabel>
                      Телефон
                    </S.ProfileSettingsDivLabel>
                    <S.ProfileSettingsDivInput
                      width={'614px'}
                      placeholder="+79161234567"
                      defaultValue={user.phone}
                      onChange={(e) => setPhoneUser(e.target.value)}
                    />
                  </S.ProfileSettingsDiv>
                  <S.ProfileSettingsBtn onClick={saveButtonChanges}>
                    Сохранить
                  </S.ProfileSettingsBtn>
                </S.ProfileSettingsForm>
              </S.ProfileSettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.MainProfile>

        <S.ProfileTitle>Мои товары</S.ProfileTitle>
      </S.MainCenterBlock>

      <S.MainContent>
        <S.ContentCards>
          {myAdverts.length > 0
            ? myAdverts.map((advert) => {
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
            : 'Товары не найдены'}
        </S.ContentCards>
      </S.MainContent>
    </S.MainContainer>
  )
}

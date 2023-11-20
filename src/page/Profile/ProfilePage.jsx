import { useSelector } from 'react-redux'
import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'
import { currentUser } from '../../store/selectors/users'
import { useState } from 'react'

export const ProfilePage = () => {
  const [nameUser, setNameUser] = useState('')
  const [surnameUser, setSurnameUser] = useState('')
  const [cityUser, setCityUser] = useState('')
  const [phoneUser, setPhoneUser] = useState('')

  const user = useSelector(currentUser)
  console.log(user)

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
                  <S.ProfileSettingsBtn>Сохранить</S.ProfileSettingsBtn>
                </S.ProfileSettingsForm>
              </S.ProfileSettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.MainProfile>

        <S.ProfileTitle>Мои товары</S.ProfileTitle>
      </S.MainCenterBlock>

      <S.MainContent>
        <S.ContentCards>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </S.ContentCards>
      </S.MainContent>
    </S.MainContainer>
  )
}

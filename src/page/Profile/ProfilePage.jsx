import { CardItem } from '../../components/CardItem/CardItem'
import * as S from './style'

export const ProfilePage = () => {
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

        <S.MainTitleH2>Здравствуйте, Антон!</S.MainTitleH2>

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
                    />
                  </S.ProfileSettingsDiv>

                  <S.ProfileSettingsDiv>
                    <S.ProfileSettingsDivLabel>
                      Фамилия
                    </S.ProfileSettingsDivLabel>
                    <S.ProfileSettingsDivInput
                      width={'300px'}
                      placeholder="Укажите фамилию"
                    />
                  </S.ProfileSettingsDiv>

                  <S.ProfileSettingsDiv>
                    <S.ProfileSettingsDivLabel>Город</S.ProfileSettingsDivLabel>
                    <S.ProfileSettingsDivInput
                      width={'300px'}
                      placeholder="Укажите город"
                    />
                  </S.ProfileSettingsDiv>

                  <S.ProfileSettingsDiv>
                    <S.ProfileSettingsDivLabel>
                      Телефон
                    </S.ProfileSettingsDivLabel>
                    <S.ProfileSettingsDivInput
                      width={'614px'}
                      placeholder="+79161234567"
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

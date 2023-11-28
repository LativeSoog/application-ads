import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BtnHoverMixin, BtnRegularMixin } from '../../style/AppStyle'

export const MainWrapper = styled.div`
  position: relative;
  height: 90vh;
  overflow: ${(props) => (props.$isModalChangePassword ? 'hidden' : 'auto')};
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
`
export const MainCenterBlock = styled.div``

export const MainTitleH2 = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
`

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;
`

export const ProfileContent = styled.div`
  max-width: 834px;
`

export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;
`

export const ModalInfoMessage = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: ${(props) => props.$colorText};
`

export const ProfileSettings = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const ProfileSettingsLeft = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 43px;
`

export const ProfileSettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
`

export const ProfileLink = styled(Link)``

export const ProfileSettingsImgImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ProfileSettingsChangePhoto = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
  cursor: pointer;
`
export const ProfileSettingsPhotoBlock = styled.div`
  display: ${(props) => (props.$uploadPhoto ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
`

export const ProfileSettingsPhotoUpload = styled.input``

export const ProfileSettingsRight = styled.div`
  width: 630px;
`

export const ProfileSettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

export const ProfileSettingsDiv = styled.div`
  display: inline-block;
  margin: 0 7px 20px;
`

export const ProfileSettingsDivLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #c4c4c4;
  margin-bottom: 4px;
  display: block;
`

export const ProfileSettingsDivInput = styled.input`
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  width: ${(props) => props.width};

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const ProfileSettingsDivBtn = styled.div`
  ${BtnRegularMixin}
  width: 300px;
  height: 44px;
  margin: 28px 0 0;

  &:hover {
    ${BtnHoverMixin}
  }
`

export const ProfileSettingsBtn = styled.div`
  ${BtnRegularMixin}
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;

  &:hover {
    ${BtnHoverMixin}
  }
`

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const ContentCards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px);
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;

  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009ee4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080c1;
    border-radius: 3px;
  }
`

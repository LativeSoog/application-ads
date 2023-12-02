import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  BtnHoverMixin,
  BtnNotActiveMixin,
  BtnRegularMixin,
} from '../../style/AppStyle'
import ReactInputMask from 'react-input-mask'

export const MainWrapper = styled.div`
  position: relative;
  height: 90vh;
  overflow: ${(props) => (props.$isModalChangePassword ? 'hidden' : 'auto')};
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media (max-width: 890px) {
    padding: 85px 0px 84px;
  }
`
export const MainCenterBlock = styled.div`
  @media (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`

export const MainTitleH2 = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 20px;
  }
`

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media (max-width: 768px) {
    padding: 0 0 40px;
  }
`

export const ProfileContent = styled.div`
  max-width: 834px;

  @media (max-width: 890px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const ProfileTitle = styled.h3`
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`

export const ModalInfoMessage = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  background: ${(props) => props.$colorBackground};
`

export const ModalNoUserMessage = styled.p`
  font-size: 40px;
  text-align: center;
  font-weight: 500;
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

  @media (max-width: 890px) {
    flex-wrap: wrap;
  }
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

  @media (max-width: 768px) {
    margin-right: 0;
  }
`

export const ProfileSettingsImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 132px;
    height: 132px;
  }
`

export const ProfileLink = styled(Link)``

export const ProfileSettingsImgImage = styled.img`
  width: 100%;
  height: 100%;
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

export const ProfileSettingsPhotoUpload = styled.input`
  display: none;
`

export const ProfileSettingsRight = styled.div`
  width: 630px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileSettingsForm = styled.form`
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 6px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 30px;
    padding: 9px 17px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const ProfileSettingsDivInputMask = styled(ReactInputMask)`
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

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 30px;
    padding: 9px 17px;

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
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

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`

export const ProfileSettingsBtn = styled.div`
  ${({ $isChange }) => ($isChange ? BtnRegularMixin : BtnNotActiveMixin)}
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;

  ${({ $isChange }) => ($isChange ? `&:hover {${BtnHoverMixin}}` : null)}

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
    order: 2;
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

  @media (max-width: 1158px) {
    grid-template-columns: repeat(3, 270px);
  }

  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 270px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    height: 596px;
  }
`

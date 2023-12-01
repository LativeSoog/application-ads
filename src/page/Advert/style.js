import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BtnHoverMixin, BtnRegularMixin } from '../../style/AppStyle'

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media (max-width: 768px) {
    padding: 0 20px 0;
  }
`

export const MainTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 32px;
  padding: 0 5px;

  @media (max-width: 768px) {
    margin-bottom: 14px;
    padding: 0;
    font-size: 18px;
    line-height: 1;
  }
`

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 0 84px;
  }
`

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`
export const MainMenuFormBtnLink = styled(Link)``

export const MainAdvert = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 55px 0 0px;
  }
`

export const AdvertContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const AdvertLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;

  @media (max-width: 890px) {
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export const AdvertLeftFillImg = styled.div`
  width: 100%;
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

  @media (max-width: 768px) {
    max-width: 100%;
    overflow: hidden;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 23px;
      height: 23px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      transform: rotate(-45deg);
      position: absolute;
      top: 24px;
      left: 32px;
      cursor: pointer;
    }
  }
`

export const AdvertLeftImgBlock = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 320px;
    height: auto;
    min-height: 320px;
    margin: 0 0px;
  }
`

export const AdvertLeftImgBlockImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const AdvertImgBar = styled.div`
  margin-top: 30px;
  width: 490px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  overflow: hidden;
  margin-left: -5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AdvertImgBarMobile = styled.div`
  display: block;
  width: 68px;
  height: 8px;
  position: absolute;
  bottom: 20px;
  left: calc(50% - (68px / 2));
  display: flex;
  justify-content: space-between;
`

export const AdvertImgBarDiv = styled.div`
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-color: #f0f0f0;
  border: 2px solid #f0f0f0;
  margin: 0 5px;
`

export const AdvertImgBarImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const AdvertRight = styled.div`
  width: 621px;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
  }
`
export const AdvertRightBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const AdvertRightBlockTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1;
  }
`

export const AdvertRightBlockInfo = styled.div`
  margin-bottom: 34px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

export const AdvertRightBlockInfoLink = styled(Link)``

export const AdvertRightBlockInfoItem = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.$color};
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => props.$color};
    margin-bottom: 4px;
  }
`

export const AdvertRightBlockPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  &::after {
    content: ' ₽';
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`

export const AdvertRightButtonBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

export const AdvertRightButton = styled.button`
  ${BtnRegularMixin}
  width: ${(props) => props.$width};
  height: 50px;
  margin-bottom: 10px;
  margin-right: ${(props) => props.$marginRight};

  &:hover {
    ${BtnHoverMixin}
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    margin-right: 0;
  }
`

export const AdvertRightBlockAuthor = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

export const AdvertRightBlockAuthorImgBlock = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  overflow: hidden;
`

export const AdvertRightBlockAuthorImgBlockImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const AdvertRightBlockAuthorContact = styled.div`
  margin-left: 12px;
`

export const AdvertRightBlockAuthorContactName = styled.p`
  font-size: 20px;
  line-height: 26px;
  font-weight: 600;
  color: #009ee4;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`

export const AdvertRightBlockAuthorContactAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 28px;
  }
`

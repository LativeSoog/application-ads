import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;
`

export const MainTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 32px;
  padding: 0 5px;
`

export const MainContent = styled.div`
  max-width: 792px;
  width: 100%;
  padding: 0 5px 117px;
`

export const MainText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`

export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  padding: 43px 5px 77px;
`

export const MainMenuLogoLink = styled(Link)`
  width: 54;
  height: 50px;
`

export const MainMenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`

export const MainMenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`

export const MainMenuFormBtnLink = styled(Link)``

export const MainMenuFormBtn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`

export const MainAdvert = styled.div`
  max-width: 1178px;
  padding: 0 0 70px;
  margin: 0 auto;
  padding: 0 5px 70px;
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
`

export const AdvertLeft = styled.div`
  max-width: 480px;
  margin-right: 54px;
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
`

export const AdvertLeftImgBlock = styled.div`
  width: 480px;
  height: 480px;
  background-color: #f0f0f0;
  margin: 0 5px;
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
`

export const AdvertRightBlockInfo = styled.div`
  margin-bottom: 34px;
`

export const AdvertRightBlockInfoLink = styled(Link)``

export const AdvertRightBlockInfoItem = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: ${(props) => props.$color};
  margin-bottom: 4px;
`

export const AdvertRightBlockPrice = styled.p`
  font-size: 28px;
  line-height: 39px;
  font-weight: 700;
  margin-bottom: 20px;

  &::after {
    content: ' ₽';
  }
`

export const AdvertRightBlockBtn = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`

export const AdvertRightBlockBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
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
`

export const AdvertRightBlockAuthorImgBlock = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`

export const AdvertRightBlockAuthorImgBlockImage = styled.img`
  width: 100%;
  height: auto;
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
`

export const AdvertRightBlockAuthorContactAbout = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #5f5f5f;
`

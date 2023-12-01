import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media (max-width: 768px) {
    padding: 85px 0px 84px;
  }
`
export const MainCenterBlock = styled.div`
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`

export const MainTitleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 29px;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background-color: transparent;
      border-top: 2px solid #000000;
      border-left: 2px solid #000000;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      position: absolute;
      top: 9px;
      left: 0;
      cursor: pointer;
    }
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

export const ProfileSeller = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;

  @media (max-width: 890px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ProfileSellerLeft = styled.div`
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
  margin-right: 50px;

  @media (max-width: 768px) {
    display: none;
    margin-right: 0px;
  }
`

export const ProfileSellerImgBlock = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ProfileLink = styled(Link)``

export const ProfileSellerImgBlockImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ProfileSellerBlockMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
    margin-bottom: 30px;
  }
`

export const ProfileSellerImgBlockMobile = styled.div`
  display: block;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
`

export const ProfileSellerImgBlockImageMobile = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`

export const ProfileSellerRight = styled.div`
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileSellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    line-height: 26px;
    margin-bottom: 6px;
  }
`

export const ProfileSellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 6px;
  }
`

export const ProfileSellerInfo = styled(ProfileSellerCity)``

export const ProfileSellerBtn = styled.button`
  margin-top: 20px;
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

  @media (max-width: 768px) {
    width: 100%;
    height: 57px;
    line-height: 20px;
  }
`

export const ProfileSellerBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 12px;
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

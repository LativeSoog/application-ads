import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BtnHoverMixin, BtnRegularMixin } from '../../style/AppStyle'

export const Main = styled.div``

export const MainSearch = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 11px 0;
  max-width: 1178px;
  margin: 0 auto;
  padding: 31px 10px 0px;

  @media (max-width: 590px) {
    height: 55px;
    background-color: #009ee4;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    margin-bottom: 0px;
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
  }
`

export const MainSearchLogoLink = styled(Link)`
  @media (max-width: 590px) {
    display: none;
  }
`

export const MainSearchLogoLinkMobile = styled(Link)`
  display: none;

  @media (max-width: 590px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`

export const MainSearchLogoLinkImg = styled.img`
  width: 54px;
  height: auto;
`

export const MainSearchLogoLinkImgMobile = styled.img`
  display: none;

  @media (max-width: 590px) {
    width: 32px;
    height: auto;
    display: block;
    object-fit: cover;
  }
`

export const MainSearchForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  @media (max-width: 590px) {
    margin-left: 10px;
    max-width: 1044px;
    width: 100%;
  }
`

export const MainSearchFormText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  ::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 590px) {
    display: none;
  }
`

export const MainSearchFormTextMobile = styled.input`
  display: none;

  @media (max-width: 590px) {
    display: inline-block;
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 30px;
    background-color: #ffffff;
    padding: 5px 17px;
    font-size: 14px;
    line-height: 21px;
    color: #000000;

    &::placeholder {
      background-color: transparent;
      color: #b3b3b3;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const MainSearchFormBtn = styled.div`
  ${BtnRegularMixin}
  margin-left: 10px;
  width: 158px;
  height: 50px;

  &:hover {
    ${BtnHoverMixin}
  }

  @media (max-width: 590px) {
    display: none;
  }
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 52px 10px 37px;

  @media (max-width: 590px) {
    padding: 85px 10px 84px;
  }
`

export const MainTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  @media (max-width: 590px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
  }
`

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 590px) {
    overflow: hidden;
    position: fixed;
    right: 0;
    left: 0;
    top: 134px;
    bottom: 84px;
  }
`

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: grid;
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
  height: 922px;

  @media (max-width: 1158px) {
    grid-template-columns: repeat(3, 270px);
  }

  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 270px);
  }

  @media (max-width: 590px) {
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: space-evenly;
  }
`

import styled from 'styled-components'
import { BtnHoverMixin, BtnRegularMixin } from '../../style/AppStyle'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 45px 45px;
  width: 366px;
  height: auto;
  max-width: 80%;
  overflow-y: auto;
  border-radius: 8px;
`

export const ModalBtnClosedSvg = styled.svg`
  position: relative;
  left: 55%;
  top: -30px;
  width: 30px;
  height: 30px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;

  &:hover {
    stroke: #009ee4;
  }
`

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`

export const ModalLogoImg = styled.img`
  width: 140px;
  height: auto;
`

export const ModalTitle = styled.h3`
  font-size: 20px;
`

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-top: 38px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`

export const ModalInfoMessage = styled.p`
  font-size: 18px;
  margin-top: 38px;
  color: #750000;
`

export const ModalBtnEnter = styled.div`
  ${BtnRegularMixin}
  width: 278px;
  height: 52px;
  margin-top: 40px;

  &:hover {
    ${BtnHoverMixin}
  }
`

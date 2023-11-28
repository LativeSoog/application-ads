import styled from 'styled-components'
import {
  BtnHoverMixin,
  BtnNotActiveMixin,
  BtnRegularMixin,
} from '../../style/AppStyle'

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

export const ModalBtnClosedContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ModalBtnClosedSvg = styled.svg`
  position: absolute;
  top: -30px;
  left: 100%;
  width: 30px;
  height: 30px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;

  &:hover {
    stroke: #009ee4;
  }
`

export const ModalTitle = styled.h3`
  font-size: 20px;
  text-align: center;
`

export const ModalBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
`

export const ModalBtnEnter = styled.div`
  ${BtnRegularMixin}
  height: 52px;
  margin-top: 40px;

  &:hover {
    ${BtnHoverMixin}
  }
`

export const ModalBtnClosed = styled.div`
  ${BtnNotActiveMixin};
  height: 52px;

  &:hover {
    ${BtnHoverMixin};
    cursor: pointer;
  }
`

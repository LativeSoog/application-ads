import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`

export const ContainerEnter = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  background-color: rgb(244 245 246 / 70%);
  z-index: 6;
`

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (${(props) => props.$height} / 2));
  opacity: 1;
`

export const ModalBlockClosedSvg = styled.svg`
  position: relative;
  left: 100%;
  width: 30px;
  height: 30px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;
`

export const ModalFormLogin = styled.form`
  width: 366px;
  height: ${(props) => props.$height};
  background-color: #ffffff;
  border-radius: 12px;
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
  padding: 43px 47px 47px 40px;
`

export const ModalFormLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`

export const ModalFormLogoImg = styled.img`
  width: 140px;
  height: auto;
`

export const ModalFormInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) => props.$marginBottom};

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }
`

export const ModalFormButtonEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #009ee4;
  border-radius: 6px;
  margin-top: ${(props) => props.$marginTop};
  margin-bottom: ${(props) =>
    props.$marginBottom ? props.$marginBottom : '20px'};
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const ModalFormButtonEnterLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const ModalFormButtonSignUp = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

export const ModalFormButtonSignUpLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`

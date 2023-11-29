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
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  height: 90%;
  padding: 20px 92px 57px 50px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow-y: auto;
`

export const ModalContentTitle = styled.h3`
  font-size: 32px;
  line-height: 46px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 15px;
`
export const ModalBtnClosedContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ModalBtnClosedSvg = styled.svg`
  position: absolute;
  left: 105%;
  top: -60px;
  width: 30px;
  height: 30px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;

  &:hover {
    stroke: #009ee4;
  }
`

export const ModalScroll = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;

  ::-webkit-scrollbar {
    width: 0px;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 0px;
  }
`

export const ModalFormNewRew = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
`

export const ModalFormNewRewBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 14px;
`

export const ModalFormNewRewLabel = styled.label`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  color: #000000;
`

export const ModalFormNewRewArea = styled.textarea`
  font-family: 'Roboto', sans-serif;
  padding: 10px 19px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  width: 100%;
  height: 100px;
  max-height: 100px;

  ::-webkit-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  :-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  ::-ms-input-placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }

  ::placeholder {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #0000004d;
  }
`

export const ModalFormNewRewBtn = styled.div`
  ${(props) => (props.$buttonActive ? BtnRegularMixin : BtnNotActiveMixin)}
  width: 181px;
  height: 50px;

  ${(props) => (props.$buttonActive ? `&:hover { ${BtnHoverMixin} }` : null)}
`

export const ModalInfoMessage = styled.p`
  font-size: 18px;
  margin: 20px 0;
  color: ${(props) => props.$colorText};
  text-align: center;
`

export const ModalReviews = styled.div`
  width: 100%;
  height: 495px;
`

export const Review = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  margin: 15px 0;
`

export const ReviewItem = styled.div`
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
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const ReviewItemLeft = styled.div`
  margin-right: 12px;
`

export const ReviewItemLeftImgBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  overflow: hidden;
`

export const ReviewItemLeftImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ReviewItemRight = styled.div`
  display: block;
`

export const ReviewItemRightName = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`

export const ReviewItemRightNameSpan = styled.span`
  margin-left: 10px;
  color: #5f5f5f;
`
export const ReviewItemRightTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`

export const ReviewItemRightText = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
`

import styled from 'styled-components'

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

  @media (max-width: 768px) {
    width: 100%;
    height: 57px;
    font-size: 14px;
    line-height: 20px;
    margin-right: 0;
  }
`

export const AdvertRightBlockBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

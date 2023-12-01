import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BtnHoverMixin } from '../../style/AppStyle'

export const Header = styled.header`
  background-color: #009ee4;

  @media (max-width: 590px) {
    display: none;
  }
`

export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`

export const HeaderButtonLink = styled(Link)``

export const HeaderButtonMain = styled.button`
  width: ${(props) => props.$width};
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  margin-left: ${(props) => props.$marginLeft};

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`

export const HeaderButtonLogout = styled.svg`
  width: 40px;
  height: 40px;
  fill: transparent;
  stroke: #696969;
  cursor: pointer;
  margin-left: 10px;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`

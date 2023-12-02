import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BtnHoverMixin, BtnRegularMixin } from '../../style/AppStyle'

export const MainMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 31px 10px 64px;

  @media (max-width: 768px) {
    display: none;
  }
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
  ${BtnRegularMixin}

  &:hover {
    ${BtnHoverMixin}
  }
`

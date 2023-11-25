import { createGlobalStyle } from 'styled-components'

export const BtnRegularMixin = `
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
    background-color: #009ee4;
    border-radius: 6px;
    border: 1px solid #009ee4;
    cursor: pointer;
`

export const BtnHoverMixin = `
color: #ffffff;
background-color: #0080C1;
border: 1px solid #0080C1;
`

export const StyleGlobal = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #000000;
}


a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
}

`

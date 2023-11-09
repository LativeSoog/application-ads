import { createGlobalStyle } from 'styled-components'

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
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
}
`

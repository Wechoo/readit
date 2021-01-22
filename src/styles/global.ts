import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: system-ui;
    background: #FFFFFF;
    min-height: 100vh;
  }
`

export default GlobalStyle

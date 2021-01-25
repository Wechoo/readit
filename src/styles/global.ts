import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "FiraSans";
    src: url("/fonts/FiraSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'FiraSans', system-ui;
    color: ${({ theme }) => theme.colors.primary};
    min-height: 100vh;
  }
`

export default GlobalStyle

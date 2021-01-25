import React from 'react'
import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'

const colors = {
  blue: '#1771F7',
  darkBlue: '#085ddd',
  lightBlue: '#F2F5FA',
  eerieBlack: '#202020',
  jet: '#2B2B2B',
  gunmetal: '#31373D',
  neutral: '#ECECEC',
  platinum: '#EBEBEB',
  white: '#FFFFFF',
  transparent: 'transparent'
}

const theme = {
  colors: {
    primary: '#0070f3'
  },
  button: {
    primary: {
      default: { light: colors.blue, dark: colors.blue },
      hover: { light: colors.darkBlue, dark: colors.darkBlue }
    }
  }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp

import React, { useEffect } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.ts';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { UserProvider } from '../contexts/userContext';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../constants/theme';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline />
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;

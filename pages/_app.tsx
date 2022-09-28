import * as React from 'react'
import Head from 'next/head';


import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import darkTheme from '../styles/theme/darkTheme';
import '../styles/globals.css'
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();





interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}


export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>

      <Head>
  <meta name="viewport" content="initial-scale=1, width=device-width" />
</Head>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider></CacheProvider>
  )
}


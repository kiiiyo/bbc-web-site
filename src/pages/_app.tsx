import Head from 'next/head'
import type { AppProps } from 'next/app'
//
import { googleTagManagerId } from '@/utils/gtm'
import { AppContextProvider } from '@/features/context/AppContext'
import { Atoms } from '@/components'
import type { TGoogleTagManagerId } from '@/components/atoms/GoogleTagManager'
//
import '../styles/globals.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <Atoms.GoogleTagManager googleTagManagerId={googleTagManagerId as TGoogleTagManagerId} />
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  )
}

export default CustomApp

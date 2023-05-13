import '@/styles/globals.css'
import { NextPageWithLayout } from '@/types/common.types';
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

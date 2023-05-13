import { ChakraProvider } from '@chakra-ui/react';
import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';
import { NextPageWithLayout } from '@/shared/types/common.types';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['cyrillic-ext'],
});

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-roboto: ${roboto.style.fontFamily};
          }
        `}
      </style>

      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false,
        }}
      >
        <ChakraProvider>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </SWRConfig>
    </>
  );
}

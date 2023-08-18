import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';

import { Seo } from '@/components/elements';

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextPageWithLayout | any;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return getLayout(
    <>
      <Seo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

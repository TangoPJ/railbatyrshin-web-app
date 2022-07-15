import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.scss';
import styles from './app.module.scss';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => {
      return setTimeout(() => {
        return setLoading(false);
      }, 300);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Head>
        <title>Rail Batyrshin</title>
        <meta name="description" content="Rail Batyrshin" />
        <meta name="author" content="Rail Batyrshin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.wrapper}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      )}
    </>
  );
};

export default MyApp;

import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/layouts/navbar';
import '../styles/globals.scss';
import styles from './app.module.scss';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Rail Batyrshin</title>
        <meta name="description" content="Rail Batyrshin" />
        <meta name="author" content="Rail Batyrshin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {mounted && (
        <main className={styles.wrapper}>
          {getLayout(<Component {...pageProps} />)}
        </main>
      )}
    </>
  );
};

export default MyApp;

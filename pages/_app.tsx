import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import 'animate.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from '../components/layouts/footer';
import Navbar from '../components/layouts/navbar';
import { repositoryName } from '../prismicio';
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
      <PrismicProvider internalLinkComponent={Link}>
        <PrismicPreview repositoryName={repositoryName}>
          {mounted && (
            <main className={styles.wrapper}>
              {getLayout(<Component {...pageProps} />)}
            </main>
          )}
        </PrismicPreview>
      </PrismicProvider>
      <Footer />
    </>
  );
};

export default MyApp;

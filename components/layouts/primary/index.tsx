import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './PrimaryLayout.module.scss';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => {
      return setTimeout(() => {
        return setLoading(false);
      }, 600);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  return (
    <>
      <Head>
        <title>Rail Batyrshin</title>
      </Head>
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <main className={styles.main}>{children}</main>
      )}
    </>
  );
};

export default PrimaryLayout;

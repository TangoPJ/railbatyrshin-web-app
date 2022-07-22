import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary';
import styles from '../styles/Home.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Home</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__lines}></div>
          <span className={styles.header__title}>JavaScript Developer</span>
          <div className={styles.header__lines}></div>
        </div>
      </header>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

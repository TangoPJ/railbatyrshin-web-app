import Head from 'next/head';
import Image from 'next/image';
import myPhoto from '../assets/images/my-photo.avif';
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
          <div className={styles.header__image}>
            <Image
              src={myPhoto}
              alt="Rail Batyrshin"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <h1 className={styles.header__title}>Rail Batyrshin</h1>
        </div>
      </header>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

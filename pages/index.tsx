import Head from 'next/head';
import Navbar from '../components/layouts/navbar';
import PrimaryLayout from '../components/layouts/primary';
import styles from '../styles/Home.module.scss';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rail Batyrshin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">Home</div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      {page}
    </PrimaryLayout>
  );
};

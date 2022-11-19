import Head from 'next/head';
import Header from '../components/header';
import { GitContent } from '../components/layouts/gitContent';
import PrimaryLayout from '../components/layouts/primary';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Home</title>
      </Head>
      <Header />
      <GitContent />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

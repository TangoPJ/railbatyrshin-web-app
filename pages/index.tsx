import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';
import PrimaryLayout from '../components/layouts/primary';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Home</title>
      </Head>
      <Header />
      <Footer />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

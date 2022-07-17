import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Home</title>
      </Head>
      <section className="container">
        <h1>Home page</h1>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

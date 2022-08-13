import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary';
import { NextPageWithLayout } from './page';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Contact</title>
      </Head>
      <section className="container">
        <h1>Contact page</h1>
      </section>
    </>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};

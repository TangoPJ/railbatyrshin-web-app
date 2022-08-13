import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary';
import { NextPageWithLayout } from './page';

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Blog</title>
      </Head>
      <section className="container">
        <h1>Blog page</h1>
      </section>
    </>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};

import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary';
import styles from '../styles/Blog.module.scss';
import { NextPageWithLayout } from './page';

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Rail Batyrshin: Blog</title>
      </Head>
      <section className={styles['blog-header']}>
        <div className="container">
          <h1 className={styles['blog-header__title']}>My Blog Posts</h1>
        </div>
      </section>
    </>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

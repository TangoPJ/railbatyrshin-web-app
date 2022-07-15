import Navbar from '../components/layouts/navbar';
import PrimaryLayout from '../components/layouts/primary';
import { NextPageWithLayout } from './page';

const Blog: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Blog</h1>
    </section>
  );
};

export default Blog;

Blog.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <Navbar />
      {page}
    </PrimaryLayout>
  );
};

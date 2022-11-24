import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from '../config';

const getBlogPostsAPI = async (params: any) => {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(PRISMIC_API_URL);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'blog_post'),
      {
        orderings: '[my.blog_post.date desc]',
        ...params,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { getBlogPostsAPI };

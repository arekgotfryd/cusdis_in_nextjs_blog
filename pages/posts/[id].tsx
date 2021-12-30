import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ReactCusdis } from 'react-cusdis'

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <footer>
        <ReactCusdis
          attrs={{
            host: 'https://cusdis.com',
            appId: 'your app id',
            pageId: postData.id,
            pageTitle: postData.id,
            theme: 'dark'
          }}
        />
      </footer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const postData = await getPostData(context.params.id);
  return {
    props: {
      postData,
    },
  };
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
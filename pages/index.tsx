import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from './layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>steven arellano</title>
        <meta name="description" content="My personal portfolio website for you, the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Layout />
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Welcome from './welcome';
import { useRouter } from 'next/router';

const OPENING_DELAY = 5000;

const Home: NextPage = () => {
  const router = useRouter();
  const [opening, setOpening] = useState(true);
  const [page, setPage] = useState(<Welcome setOpening={setOpening} />);

  useEffect(() => {
    if (!opening) {
      router.push('/layout');
    }
  }, [opening, router]);

  return (
    <div>
      <Head>
        <title>steven arellano</title>
        <meta name="description" content="My personal portfolio website for you, the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{page}</main>
    </div>
  );
};

export default Home;

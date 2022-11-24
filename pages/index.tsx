import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { MobileLayout, WebLayout } from './layout';

const Home: NextPage = () => {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);

    };
  }, []);

  const updateDimensions = () => {
    const w = window.innerWidth;
    setWindowWidth(w);
  };

  return (
    <div>
      <Head>
        <title>steven arellano</title>
        <meta name="description" content="My personal portfolio website for you, the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        {(width < 1100) ? <MobileLayout /> : <WebLayout />}
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MobileLayout from './mobile';
import WebLayout from './web';

const Home: NextPage = () => {
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const w = window.innerWidth;
    setWindowWidth(w);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);

    };
  }, []);


  return (
    <div>
      <Head>
        <title>steven arellano</title>
        <meta name="description" content="My personal portfolio website for you, the people" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        {(width < 650) ? <MobileLayout /> : <WebLayout />}
      </main>
    </div>
  );
};

export default Home;

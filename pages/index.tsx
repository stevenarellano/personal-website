import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import MobileLayout from './mobile';
import WebLayout from './web';
import Welcome from './welcome';

const OPENING_DELAY = 5000;

const Home: NextPage = () => {
  const [width, setWindowWidth] = useState(0);
  const [opening, setOpening] = useState(true);
  const [page, setPage] = useState(<Welcome setOpening={setOpening} />);

  const updateDimensions = () => {
    const w = window.innerWidth;
    setWindowWidth(w);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    if (!opening && width < 650) {
      setPage(<MobileLayout />);
    } else if (!opening && width >= 650) {
      setPage(<WebLayout />);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [opening, width]);


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

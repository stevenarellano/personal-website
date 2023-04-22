import type { NextPage } from 'next';
import { Experiences, Footer, Landing, Navbar, Projects, } from '../components';
import { Page, pageState } from '../context';
import { useRecoilValue } from 'recoil';
import Head from 'next/head';

const DIVIDER_STYLES = {
    width: 'calc(100% - 16rem)',
    borderBottom: 'solid black 2px',
    margin: "2rem 0",
};

type PageElements = {
    [key in Page]: JSX.Element;
};

const PAGES: PageElements = {
    "LANDING": <Landing />,
    "EXPERIENCES": <Experiences />,
    "PROJECTS": <Projects />,
};

const Layout: NextPage = () => {
    const pageKey: Page = useRecoilValue(pageState);

    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
        <>
            <Head>
                <title>steven arellano</title>
                <meta name="description" content="My personal portfolio website for you, the people" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="main" style={{
                width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", height: "100vh",
            }}>
                <Navbar />
                {PAGES[pageKey]}
            </div >
        </>
    );
};


export default Layout;

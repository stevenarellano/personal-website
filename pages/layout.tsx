import type { NextPage } from 'next';
import { Experiences, Footer, Landing, Navbar, Projects, } from '../components';
import { Page, pageState } from '../context';
import { useRecoilValue } from 'recoil';

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

    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Navbar />
            {PAGES[pageKey]}
            <Footer />
        </div >
    );
};


export default Layout;

import type { NextPage } from 'next';
import { Experiences, Landing, Navbar, } from '../components';

const Layout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Navbar />
            <Landing />
            <Experiences />
        </div >
    );
};

export default Layout;

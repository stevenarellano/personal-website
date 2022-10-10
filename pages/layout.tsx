import type { NextPage } from 'next';
import { Landing, Navbar, } from '../components';

const Layout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Navbar />
            <Landing />
        </div >
    );
};

export default Layout;

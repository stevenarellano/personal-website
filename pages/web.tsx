import type { NextPage } from 'next';
import { Experiences, Landing, Navbar, Projects, } from '../components';

const DIVIDER_STYLES = {
    width: 'calc(100% - 16rem)',
    borderBottom: 'solid black 2px',
    margin: "2rem 0",
};

const WebLayout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Navbar />
            <Landing />
            <div id="experiences-page" style={DIVIDER_STYLES} />
            <Experiences />
            <div id="projects-page" style={DIVIDER_STYLES} />
            <Projects />
        </div >
    );
};


export default WebLayout;

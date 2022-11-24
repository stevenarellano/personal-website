import type { NextPage } from 'next';
import { Experiences, Landing, Navbar, Projects, } from '../components';


const WebLayout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Navbar />
            <Landing />
            <div id="experiences-page" style={{ height: "4rem", width: "100%" }} />
            <Experiences />
            <div id="projects-page" style={{ height: "4rem", width: "100%" }} />
            <Projects />
        </div >
    );
};


export default WebLayout;

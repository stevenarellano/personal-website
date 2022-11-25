import type { NextPage } from 'next';
import { MobileExperiences, MobileLanding, Navbar, Projects, } from '../components';


const MobileLayout: NextPage = () => {
    return (
        <div style={{
            width: "100%", display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Navbar />
            <MobileLanding />
            {/* <div id="experiences-page" style={{ height: "4rem", width: "100%" }} /> */}
            <MobileExperiences />
            {/* <div id="projects-page" style={{ height: "4rem", width: "100%" }} /> */}
            <Projects />
        </div >
    );
};

export default MobileLayout;
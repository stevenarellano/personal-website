import type { NextPage } from 'next';
import { MobileExperiences, MobileLanding, MobileProjects, Navbar } from '../components';


const MobileLayout: NextPage = () => {
    return (
        <div style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Navbar />
            <MobileLanding />
            <div id="experiences-page" style={{ height: "4rem", width: "100%" }} />
            <MobileExperiences />
            <div id="projects-page" style={{ height: "4rem", width: "100%" }} />
            <MobileProjects />
        </div >
    );
};

export default MobileLayout;
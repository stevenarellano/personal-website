import { alphabet, projectData } from "../../context";
import SectionHeader from "../Ui/SectionHeader";
import Project from "./Project";

const Projects = () => {
    return (
        <div className="section-container">
            <SectionHeader title='PROJECTS' />
            <div style={{ height: "90vh" }} className="project-section-1" >
                {projectData.map(({ tools, title, description, blurp, github, website, backgroundColor, logo }, index) =>
                    <Project templateArea={alphabet[index]}
                        key={index}
                        tools={tools}
                        title={title}
                        description={description}
                        blurp={blurp}
                        github={github}
                        website={website}
                        backgroundColor={backgroundColor}
                        logo={logo} />
                )}
            </div>
        </div>
    )
}

export default Projects
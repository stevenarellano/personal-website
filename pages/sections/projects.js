import styles from "../../styles/sections/Projects.module.scss";

import ProjectRow from "./projects/projectRow";

export default function Projects() {
    return (
        <div className="sectionContainer">
            <div className="sectionHeader">
                <hr />
                <h4 className="padLeft">
                    {" "}
                    <div>02.</div> Projects
                </h4>
            </div>
            <ProjectRow />
            <ProjectRow />
        </div>
    );
}

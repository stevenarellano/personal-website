import { PROJECT_DATA } from "../../data/pData";
import Project from "./projects/project";
import styles from "../../styles/sections/Projects.module.scss"

export default function Projects() {
    const projDOM = [];
    for (let i = 0; i < PROJECT_DATA.length; i += 1) {
        const projEle = (
            <Project key={i} data={PROJECT_DATA[i]} />
        )
        projDOM.push(projEle);
    }

    return (
        <div className="sectionContainer">
            <div className="sectionHeader">
                <hr />
                <h4 className="padLeft">
                    {" "}
                    <div>02.</div> Projects
                </h4>
            </div>
            <div className={styles.projects}>
                {projDOM}
            </div>

        </div>
    );
}

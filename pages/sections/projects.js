import styles from "../../styles/sections/Projects.module.scss";

import ProjectRow from "./projects/projectRow";
import { PROJECT_DATA } from "./projects/pData";

export default function Projects() {
    const projDOM = [];
    for (let i = 0; i < PROJECT_DATA.length / 2; i++) {
        let row = (
            <ProjectRow
                key={i}
                data={[PROJECT_DATA[i * 2], PROJECT_DATA[i * 2 + 1]]}
            />
        );
        projDOM.push(row);
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
            {projDOM}
        </div>
    );
}

import ProjectRow from "../../data/projectRow";
import { PROJECT_DATA } from "../../data/pData";

export default function Projects() {
    const projDOM = [];
    for (let i = 0; i < PROJECT_DATA.length / 2; i++) {
        let data1 = PROJECT_DATA[i * 2];
        let data2 = PROJECT_DATA[i * 2 + 1] ? PROJECT_DATA[i * 2 + 1] : null;
        let row = data2 ? (
            <ProjectRow key={i} data={[data1, data2]} />
        ) : (
            <ProjectRow key={i} data={[data1]} />
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

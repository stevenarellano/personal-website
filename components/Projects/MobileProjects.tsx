import { useState } from 'react';
import { projectData, ProjectInfo } from '../../context';

const MobileProject = ({ info }: { info: ProjectInfo; }) => {
    const { title, blurp, description, logo, tools, website, github } = info;
    const [toggled, setToggled] = useState(false);

    function toggle(e: any) {
        if (e.target.tagName == "DIV" || e.target.tagName == "SPAN") { setToggled(!toggled); }
    }

    return (
        <>
            <div
                style={{ display: toggled ? "none" : "flex" }}
                onClick={toggle}
                className="m-p-tile">
                <span className="mt-2 mb-auto">
                    <strong>tools: </strong>
                    {tools.map((tool, i) => tool + `${(i === tools.length - 1) ? '' : ', '}`)}
                </span>
                <span className="m-p-blurp">{blurp}</span>
                <span className="m-p-company">{title}</span>
            </div>
            <div
                onClick={toggle}
                style={{ display: !toggled ? "none" : "flex" }}
                className="m-p-tile-clicked">
                {github && <a rel="noreferrer" href={github} target="_blank">github</a>}
                {website && <a rel="noreferrer" href={website} target="_blank">website</a>}
            </div>
        </>
    );
};

const MobileProjects = () => {
    return (
        <div className="mobile-page spacer-top spacer-bottom">
            <div className="mobile-header">
                <span className="m-section-title">PROJECTS</span>
            </div>
            {projectData.map((content, i) => <MobileProject key={i} info={content} />)}
        </div>
    );
};

export default MobileProjects;
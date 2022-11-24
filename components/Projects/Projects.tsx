import { useState } from 'react';
import { projectData, ProjectInfo } from '../../context';

export type ProjectSelectorProps = {
    name: string;
    subtitle: string;
    tools: string[];
    indexSetter: () => void;
    active?: boolean;
};

const ProjectSelector = ({ name, subtitle, tools = [], active, indexSetter }: ProjectSelectorProps) => {
    return (
        <div
            onClick={indexSetter}
            className="project-selector"
            style={{ background: active ? "lightgray" : undefined }}
        >

            <div className="ps-info">
                <div className="ps-title">{name}</div>
                <div className="ps-subtitle">{subtitle}</div>
                <div className="ps-tools">[{tools.map((tool, i) => tool + `${(i === tools.length - 1) ? '' : ' / '}`)}]</div >
            </div>
        </div>
    );
};

const ProjectBox = ({ info }: { info: ProjectInfo; }) => {
    const { title, blurp, description, logo, tools, website, github } = info;

    return (
        <div className="project-box-col">
            <div className="pb-general">
                {/* <div className="pb-subtitle">{blurp}</div> */}
                <div className="pb-title">{title}</div>
            </div>
            <div className="pb-info">
                <div className="pb-description">
                    <strong>description: </strong> {description}
                </div>
                <div className="pb-tools">
                    <strong>tools: </strong> {tools.map((tool, i) => tool + `${(i === tools.length - 1) ? '' : ', '}`)}
                </div>
            </div>

            <div className="pb-links">
                {github && <a href={github} target='_blank' rel="noreferrer">github</a>}
                {website && <a href={website} target='_blank' rel="noreferrer">website</a>}
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeIndex, setIndex] = useState(0);

    return (
        <div className='project-container page-container'>
            <div className="project-box">
                <div className="project-select-col">
                    <div>PROJECTS</div>
                    <div>SELECT ONE</div>
                    <div>
                        {projectData.map((info, i: number) => {
                            return (
                                <ProjectSelector
                                    key={i}
                                    name={info.title}
                                    subtitle={info.blurp}
                                    tools={info.tools}
                                    active={activeIndex === i}
                                    indexSetter={() => setIndex(i)}
                                />
                            );
                        })}
                    </div>
                </div>
                <ProjectBox info={projectData[activeIndex]} />
            </div>
        </div>
    );
};

export default Projects;;
import { useState } from 'react';
import { projectData, ProjectInfo } from '../../context';
import styles from '/styles/modules/projects.module.scss';

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
            className={`${styles.selector} ${active ? styles.selectorActive : undefined} `}
        >

            <div className={styles.selectorInfo}>
                <div className={styles.selectorTitle}>{name}</div>
                <div className={styles.selectorSubtitle}>{subtitle}</div>
                <div className={styles.selectorTools}>[{tools.map((tool, i) => tool + `${(i === tools.length - 1) ? '' : ' / '}`)}]</div >
            </div>
        </div >
    );
};

const ProjectBox = ({ info }: { info: ProjectInfo; }) => {
    const { title, blurp, description, logo, tools, website, github } = info;

    return (
        <div className={styles.boxCol}>
            <div className={styles.boxGeneral}>
                {/* <div className="pb-subtitle">{blurp}</div> */}
                <div className={styles.boxTitle}>{title}</div>
            </div>
            <div className={styles.boxInfo}>
                <div className={styles.boxDescription}>
                    <strong>description: </strong> {description}
                </div>
                <div className={styles.boxTools}>
                    <strong>tools: </strong> {tools.map((tool, i) => tool + `${(i === tools.length - 1) ? '' : ', '}`)}
                </div>
            </div>

            <div className={styles.boxLinks}>
                {github && <a href={github} target='_blank' rel="noreferrer">github</a>}
                {website && <a href={website} target='_blank' rel="noreferrer">website</a>}
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeIndex, setIndex] = useState(0);

    return (
        <div className={`${styles.projectContainer} page-container`}>
            <div className={styles.box}>
                <div className={styles.selectCol}>
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

export default Projects;
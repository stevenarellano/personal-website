import { useEffect, useState } from 'react';
import { PROJECT_DATA, ProjectInfo } from '../../context';
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
                <div className={styles.selectorTools}>[{tools.map((tool, i) => tool + `${(i === tools.length - 1) ? '' : ' / '}`)}]</div>
            </div>
        </div >
    );
};

const ProjectBox = ({ info }: { info: ProjectInfo; }) => {
    const { title, blurp, description, logo, tools, website, github } = info;
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(false);
        setTimeout(() => setActive(true), 100);
    }, [info]);

    return (
        <div id="project-box" className={`${styles.boxCol} ${active ? styles.boxActive : styles.boxInactive}`}>
            <img src={logo} alt='logo' className={styles.boxImg} />
            <div className={styles.boxGeneral}>
                <div className={styles.boxTitle}>{title}</div>
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
                        {PROJECT_DATA.map((info, i: number) => {
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
                <ProjectBox info={PROJECT_DATA[activeIndex]} />
            </div>
        </div>
    );
};

export default Projects;
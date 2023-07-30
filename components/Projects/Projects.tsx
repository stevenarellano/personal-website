
import Image from 'next/image';
import { PROJECT_DATA, ProjectInfo } from '../../context';
import styles from '/styles/modules/projects.module.scss';


const Project = ({
    title,
    blurp,
    description,
    logo,
    tools,
    website,
    github,
}: ProjectInfo) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <Image src={logo} alt={title} width={100} height={100} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{description}</div>
            <div className={styles.tools}>tools: {
                tools.map((tool: string, i: number) => {
                    return (
                        <span className={styles.tool} key={i}>
                            {tool}
                            {i !== tools.length - 1 && ', '}
                        </span>
                    );
                })
            }</div>
            <div className={styles.links}>
                {website && (
                    <a href={website} target="_blank" rel="noreferrer">
                        <div className={styles.link}>[WEBSITE]</div>
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" rel="noreferrer">
                        <div className={styles.link}>[GITHUB]</div>
                    </a>
                )}
            </div>
        </div>
    );
};


const Projects = () => {
    return (
        <div className={`${styles.projectContainer} page-container`}>
            <div className={styles.header}>LAST UPDATED: JULY 30, 2023</div>
            <div className={styles.cols}>
                <div className={styles.info}>
                    <div>
                        PROJECT BOARD
                    </div>
                </div>
                <div className={styles.projects}>
                    {PROJECT_DATA.map((project: ProjectInfo, index: number) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            tools={project.tools}
                            logo={project.logo}
                            blurp={''}
                            github={project.github}
                            website={project.website} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
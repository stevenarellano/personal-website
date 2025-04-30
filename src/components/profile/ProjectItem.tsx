import React, { useState } from 'react';
import '../../styles/ProjectItem.css';
import LineBreak from '../common/LineBreak';
import { ProjectInfo } from '../../types';


type ProjectItemProps = {
    project: ProjectInfo;
    last: boolean;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project, last }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li className="project-item">
            <div className="project-header">
                {project.logo && (
                    <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />
                )}
                <div className="project-details">
                    <div className="project-main-info">
                        <strong>{project.title}</strong>
                        {project.blurp && <span className="project-blurp">&nbsp;— {project.blurp}</span>}
                    </div>
                    <div className="project-tools">
                        <em>Tools:</em> {project.tools.join(', ')}
                    </div>
                </div>
            </div>
            <button onClick={toggleExpand} className="project-toggle">
                {isExpanded ? 'Less' : 'More'}
            </button>
            <div className={`project-description ${isExpanded ? 'expanded' : ''}`}>
                <p>{project.description}</p>
                <div className="project-links">
                    {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>
            {!last && <LineBreak />}
        </li>
    );
};

export default ProjectItem;

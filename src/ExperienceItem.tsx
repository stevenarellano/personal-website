import React, { useState } from 'react';
import './ExperienceItem.css';
import LineBreak from './LineBreak';
import { ExperienceInfo } from './data/experiences';

type ExperienceItemProps = {
    experience: ExperienceInfo;
    last: boolean;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, last }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li className="experience-item">
            <div className="experience-header">
                {experience.logo && (
                    <img src={experience.logo} alt={`${experience.company} logo`} className="experience-logo" />
                )}
                <div className="experience-details">
                    <div className="experience-main-info">
                        <div className="experience-company">
                            <strong>{experience.company}</strong>
                        </div>
                        <div className="experience-date">{experience.when}</div>
                    </div>
                    <div className="experience-role-location">
                        <span className="experience-role">{experience.role} {experience.subgroup && <span className="experience-subgroup"> ({experience.subgroup})</span>}</span>
                        <span className="experience-location">{experience.location}</span>
                    </div>
                </div>
            </div>
            <button onClick={toggleExpand} className="experience-toggle">
                {isExpanded ? 'Less' : 'More'}
            </button>
            <div className={`experience-description ${isExpanded ? 'expanded' : ''}`}>
                <ul className="experience-responsibilities">
                    {experience.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                {experience.website && (
                    <p className="experience-website">
                        <a href={experience.website} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </p>
                )}
            </div>
            {!last && <LineBreak />}
        </li>
    );
};

export default ExperienceItem;

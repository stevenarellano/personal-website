import React, { useState } from 'react';
import './EducationItem.css';
import LineBreak from './LineBreak';
import { EducationInfo } from './data/education';

type EducationItemProps = {
    education: EducationInfo;
    last: boolean;
};

const EducationItem: React.FC<EducationItemProps> = ({ education, last }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li className="education-item">
            <div className="education-header">
                {education.logo && (
                    <img src={education.logo} alt={`${education.institution} logo`} className="education-logo" />
                )}
                <div className="education-details">
                    <div className="education-main-info">
                        <div className="education-institution">
                            <strong>{education.institution}</strong>
                        </div>
                        <div className="education-date">{education.when}</div>
                    </div>
                    <div className="education-degree-location">
                        <span className="education-degree">{education.degree}</span>
                        <span className="education-location">{education.location}</span>
                    </div>
                </div>
            </div>
            <button onClick={toggleExpand} className="education-toggle">
                {isExpanded ? 'Less' : 'More'}
            </button>
            <div className={`education-description ${isExpanded ? 'expanded' : ''}`}>
                {education.GPA && (
                    <p>
                        <em>GPA:</em> {education.GPA}
                    </p>
                )}
                {education.relevantCourses && education.relevantCourses.length > 0 && (
                    <>
                        <p>
                            <em>Relevant Courses:</em>
                        </p>
                        <ul className="education-courses">
                            {education.relevantCourses.map((course, idx) => (
                                <li key={idx}>{course}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
            {!last && <LineBreak />}
        </li>
    );
};

export default EducationItem;

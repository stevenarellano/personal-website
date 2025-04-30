import React, { useState } from 'react';
import '../../styles/AwardItem.css';
import LineBreak from '../common/LineBreak';
import { AwardInfo } from '../../types';

type AwardItemProps = {
    award: AwardInfo;
    last: boolean;
};

const AwardItem: React.FC<AwardItemProps> = ({ award, last }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li className="award-item">
            <div className="award-header">
                <div className="award-left">
                    <strong>{award.item}</strong>
                    {award.extra && <span className="award-extra"> ({award.extra})</span>}
                    <span className="award-issuer">&nbsp;— {award.issuer}</span>
                </div>
                <div className="award-year">
                    {award.year}
                </div>
            </div>
            <button onClick={toggleExpand} className="award-toggle">
                {isExpanded ? 'Less' : 'More'}
            </button>
            <div className={`award-description ${isExpanded ? 'expanded' : ''}`}>
                <p>{award.description}</p>
                {award.link && (
                    <p className="award-link">
                        <a href={award.link} target="_blank" rel="noopener noreferrer">
                            Learn More
                        </a>
                    </p>
                )}
            </div>
            {!last && <LineBreak />}
        </li>
    );
};

export default AwardItem;

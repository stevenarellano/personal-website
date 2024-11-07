import React, { useState } from 'react';
import './TalksAndPapersItem.css';
import LineBreak from './LineBreak';
import { TalksAndPapersInfo } from './data/talksAndPapers';

type TalksAndPapersItemProps = {
    item: TalksAndPapersInfo;
    last: boolean;
};

const TalksAndPapersItem: React.FC<TalksAndPapersItemProps> = ({ item, last }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li className="talks-papers-item">
            <div className="talks-papers-header">
                <div className="talks-papers-title-type">
                    <strong>{item.title}</strong>
                    <span className="talks-papers-type">
                        {item.type === 'paper' ? 'Paper' : 'Talk'}
                    </span>
                </div>
                <div className="talks-papers-location">
                    <em>{item.location}</em>
                </div>
            </div>
            <button onClick={toggleExpand} className="talks-papers-toggle">
                {isExpanded ? 'Less' : 'More'}
            </button>
            <div className={`talks-papers-description ${isExpanded ? 'expanded' : ''}`}>
                <p>{item.description}</p>
                {item.link && (
                    <p className="talks-papers-link">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </p>
                )}
            </div>
            {!last && <LineBreak />}
        </li>
    );
};

export default TalksAndPapersItem;

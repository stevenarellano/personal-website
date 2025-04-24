import React from 'react';
import './TalksItem.css';

interface TalkItemProps {
  item: {
    title: string;
    venue: string;
    date: string;
    link?: string;
    description?: string;
  };
  last: boolean;
}

const TalksItem: React.FC<TalkItemProps> = ({ item, last }) => {
  return (
    <li className={`talks-item ${last ? 'last' : ''}`}>
      <div className="talks-header">
        <h3 className="talks-title">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <div className="talks-metadata">
          <span className="talks-venue">{item.venue}</span>
          <span className="talks-date">{item.date}</span>
        </div>
      </div>
      {item.description && (
        <p className="talks-description">{item.description}</p>
      )}
    </li>
  );
};

export default TalksItem; 
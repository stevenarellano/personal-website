import React from 'react';
import '../../styles/TalksItem.css';
import { TalkInfo } from '../../types';

interface TalkItemProps {
  item: TalkInfo;
  last: boolean;
}

const TalksItem: React.FC<TalkItemProps> = ({ item, last }) => {
  return (
    <li className={`talk-item ${last ? 'last' : ''}`}>
      <div className="talk-header">
        <h3 className="talk-title">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <div className="talk-metadata">
          <span className="talk-venue">{item.venue}</span>
          <span className="talk-date">{item.date}</span>
        </div>
      </div>
      {item.description && (
        <p className="talk-description">{item.description}</p>
      )}
    </li>
  );
};

export default TalksItem; 
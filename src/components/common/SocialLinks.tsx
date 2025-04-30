import React from 'react';
import LINKS_DATA from '../../data/links';

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      {LINKS_DATA.map((linkInfo, index) => (
        <span key={index}>
          <a
            href={linkInfo.link}
            target={linkInfo.target}
            rel={linkInfo.rel}
          >
            {linkInfo.name}
          </a>
          &emsp;
        </span>
      ))}
    </div>
  );
};

export default SocialLinks; 
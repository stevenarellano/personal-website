import React from 'react';
import MainNav from './MainNav';
import SocialLinks from '../common/SocialLinks';

interface HeaderProps {
  title: string;
  intro: string;
  showProfileImage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, intro, showProfileImage = false }) => {
  return (
    <section className="profile-header">
      <div className="header-content">
        <div className="text-content">
          <h1 style={{ fontSize: '2rem' }}>{title}</h1>
          <p className="intro">
            <em>{intro}</em>
          </p>
          <br />
          <MainNav />
          <SocialLinks />
        </div>
        {showProfileImage && (
          <div className="profile-image-container">
            <img src="assets/me.jpeg" alt="Steve" className="profile-pic" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
import React from 'react';
import LineBreak from '../common/LineBreak';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  intro: string;
  showProfileImage?: boolean;
  backLink?: string;
  backText?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  intro,
  showProfileImage = false,
  backLink,
  backText
}) => {
  return (
    <div className="App">
      <Header title={title} intro={intro} showProfileImage={showProfileImage} />
      <LineBreak color="#000" />
      <main className="profile-content">
        {children}
      </main>
      {backLink && backText && (
        <>
          <br />
          <Footer backLink={backLink} backText={backText} />
        </>
      )}
    </div>
  );
};

export default Layout; 
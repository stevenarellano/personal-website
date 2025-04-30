import React from 'react';
import { Link } from 'react-router-dom';

const MainNav: React.FC = () => {
  return (
    <div className="main-nav">
      <Link to="/">home</Link>
      <Link to="/blog">blog</Link>
    </div>
  );
};

export default MainNav; 
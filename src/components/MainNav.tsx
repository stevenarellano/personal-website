import React from 'react';
import { Link } from 'react-router-dom';

const MainNav: React.FC = () => {
  return (
    <div className="main-nav">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default MainNav; 
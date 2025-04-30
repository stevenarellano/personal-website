import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  backLink: string;
  backText: string;
}

const Footer: React.FC<FooterProps> = ({ backLink, backText }) => {
  return (
    <footer>
      <Link to={backLink}>← {backText}</Link>
    </footer>
  );
};

export default Footer; 
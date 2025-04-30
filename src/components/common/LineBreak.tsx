import React from 'react';

interface LineBreakProps {
  color?: string;
}

const LineBreak: React.FC<LineBreakProps> = ({ color = '#000' }) => {
  return (
    <hr style={{ border: 'none', borderTop: `1px solid ${color}`, margin: '1rem 0' }} />
  );
};

export default LineBreak; 
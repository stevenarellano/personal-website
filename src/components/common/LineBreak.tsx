import React from 'react';
import { Divider } from '@mui/material';

interface LineBreakProps {
  color?: string;
}

const LineBreak: React.FC<LineBreakProps> = ({ color = '#000' }) => {
  return (
    <Divider sx={{ my: 2, borderColor: color }} />
  );
};

export default LineBreak; 
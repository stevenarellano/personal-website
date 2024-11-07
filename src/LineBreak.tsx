import React from 'react';

interface LineBreakProps {
    color?: string;
    thickness?: string;
    width?: string;
}

function LineBreak({ color = "#ccc", thickness = "1px", width = "100%" }: LineBreakProps) {
    return (
        <hr style={{ border: 'none', borderTop: `${thickness} solid ${color}`, width, margin: '1em 0' }} />
    );
}

export default LineBreak;

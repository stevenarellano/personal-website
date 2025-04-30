import React, { useState } from 'react';
import { Box, Typography, Button, ListItem, List, Collapse, Divider } from '@mui/material';
import { EducationInfo } from '../../types';

type EducationItemProps = {
    education: EducationInfo;
    last: boolean;
};

const EducationItem: React.FC<EducationItemProps> = ({ education, last }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <ListItem
            component="li"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
            }}
        >
            <Box sx={{ display: 'flex', width: '100%', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, width: '100%', flexWrap: 'wrap' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: { xs: 1, md: 0 } }}>
                            {education.institution}
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                            {education.when}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, width: '100%', flexWrap: 'wrap' }}>
                        <Typography variant="body1">
                            {education.degree.includes('Joint')
                                ? education.degree.replace('Computer Science', 'Computer Science, ')
                                : education.degree}
                        </Typography>
                        <Typography variant="body2" sx={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                            {education.location}
                        </Typography>
                    </Box>
                </Box>
                {education.logo && (
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', minWidth: '80px' }}>
                        <Box
                            component="img"
                            src={education.logo}
                            alt={`${education.institution} logo`}
                            sx={{ maxHeight: 60, maxWidth: '100%' }}
                        />
                    </Box>
                )}
            </Box>

            <Button
                onClick={toggleExpand}
                size="small"
                sx={{
                    alignSelf: 'flex-start',
                    mt: 1.5,
                    p: 0,
                    minWidth: 0,
                    fontFamily: '"IBM Plex Mono", monospace',
                    textDecoration: 'underline',
                    color: 'black',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline'
                    }
                }}
            >
                {isExpanded ? 'LESS' : 'MORE'}
            </Button>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                {education.GPA && (
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        <Typography component="span" sx={{ fontWeight: 700 }}>GPA:</Typography> {education.GPA}
                    </Typography>
                )}
                {education.relevantCourses && education.relevantCourses.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
                            Relevant Coursework:
                        </Typography>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            {education.relevantCourses.map((course, idx) => (
                                <ListItem key={idx} sx={{ display: 'list-item', padding: 0, paddingY: 0.75 }}>
                                    <Typography variant="body2">
                                        {course}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                )}
            </Collapse>

            {!last && <Divider sx={{ width: '100%', my: 3 }} />}
        </ListItem>
    );
};

export default EducationItem;

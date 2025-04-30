import React, { useState } from 'react';
import { Box, Typography, Button, ListItem, List, ListItemText, Collapse, Divider, Link } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { ExperienceInfo } from '../../types';

type ExperienceItemProps = {
    experience: ExperienceInfo;
    last: boolean;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, last }) => {
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
            className="experience-item"
        >
            <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, width: '100%' }}>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            {experience.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {experience.when}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, width: '100%' }}>
                        <Typography variant="body1">
                            {experience.role}
                            {experience.subgroup &&
                                <Typography component="span" sx={{ fontStyle: 'italic' }}>
                                    {' '}({experience.subgroup})
                                </Typography>
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {experience.location}
                        </Typography>
                    </Box>
                </Box>
                {experience.logo && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: '80px' }}>
                        <Box
                            component="img"
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            sx={{ maxHeight: 60, maxWidth: '100%' }}
                            className="experience-logo"
                        />
                    </Box>
                )}
            </Box>

            <Button
                onClick={toggleExpand}
                startIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
                sx={{ alignSelf: 'flex-start', mt: 1 }}
                size="small"
            >
                {isExpanded ? 'Less' : 'More'}
            </Button>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                <List sx={{ pl: 2, mb: 1 }}>
                    {experience.responsibilities.map((item, idx) => (
                        <ListItem key={idx} sx={{ display: 'list-item', padding: 0, paddingY: 0.5 }}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                {experience.website && (
                    <Box sx={{ ml: 2, mt: 1 }}>
                        <Link
                            href={experience.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            Visit Website
                        </Link>
                    </Box>
                )}
            </Collapse>

            {!last && <Divider sx={{ width: '100%', my: 2 }} />}
        </ListItem>
    );
};

export default ExperienceItem;

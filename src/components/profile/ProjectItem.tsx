import React, { useState } from 'react';
import { Box, Typography, Button, ListItem, Collapse, Divider, Link, Stack } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { ProjectInfo } from '../../types';

type ProjectItemProps = {
    project: ProjectInfo;
    last: boolean;
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project, last }) => {
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
            className="project-item"
        >
            <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', mb: 1, width: '100%' }}>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            {project.title}
                        </Typography>
                        {project.blurp && (
                            <Typography variant="h6" component="span" sx={{ fontWeight: 'normal', ml: 1 }}>
                                — {project.blurp}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ mb: 1 }}>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', display: 'inline' }}>
                            Tools:
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'inline', ml: 1 }}>
                            {project.tools.join(', ')}
                        </Typography>
                    </Box>
                </Box>
                {project.logo && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: '80px' }}>
                        <Box
                            component="img"
                            src={project.logo}
                            alt={`${project.title} logo`}
                            sx={{ maxHeight: 60, maxWidth: '100%' }}
                            className="project-logo"
                        />
                    </Box>
                )}
            </Box>

            <Button
                onClick={toggleExpand}
                startIcon={isExpanded ? <ExpandLess /> : <ExpandMore />}
                sx={{ alignSelf: 'flex-start', mt: 1, }}
                size="small"
            >
                {isExpanded ? 'Less' : 'More'}
            </Button>

            <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                <Typography variant="body1" paragraph>
                    {project.description}
                </Typography>
                <Stack direction="row" spacing={2}>
                    {project.website && (
                        <Link
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            Visit Website
                        </Link>
                    )}
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            View on GitHub
                        </Link>
                    )}
                </Stack>
            </Collapse>

            {!last && <Divider sx={{ width: '100%', my: 2 }} />}
        </ListItem>
    );
};

export default ProjectItem;

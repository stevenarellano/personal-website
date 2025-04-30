import React, { useState } from 'react';
import { Box, Typography, Button, ListItem, Collapse, Divider, Link } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { AwardInfo } from '../../types';

type AwardItemProps = {
    award: AwardInfo;
    last: boolean;
};

const AwardItem: React.FC<AwardItemProps> = ({ award, last }) => {
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
            className="award-item"
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
                <Box>
                    <Typography variant="h6" component="div" sx={{ display: 'inline', fontWeight: 'bold' }}>
                        {award.item}
                    </Typography>
                    {award.extra && (
                        <Typography variant="h6" component="span" sx={{ display: 'inline', fontWeight: 'normal' }}>
                            {' '}({award.extra})
                        </Typography>
                    )}
                    <Typography variant="h6" component="span" sx={{ display: 'inline', fontWeight: 'normal' }}>
                        &nbsp;— {award.issuer}
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {award.year}
                </Typography>
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
                <Typography variant="body1" paragraph>
                    {award.description}
                </Typography>
                {award.link && (
                    <Box sx={{ mt: 1 }}>
                        <Link
                            href={award.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                        >
                            Learn More
                        </Link>
                    </Box>
                )}
            </Collapse>

            {!last && <Divider sx={{ width: '100%', my: 2 }} />}
        </ListItem>
    );
};

export default AwardItem;

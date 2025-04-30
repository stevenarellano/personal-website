import React from 'react';
import { Box, Typography, ListItem, Link, Divider } from '@mui/material';
import { TalkInfo } from '../../types';

interface TalkItemProps {
  item: TalkInfo;
  last: boolean;
}

const TalksItem: React.FC<TalkItemProps> = ({ item, last }) => {
  return (
    <ListItem
      component="li"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
      }}
      className="talk-item"
    >
      <Box sx={{ width: '100%', mb: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {item.link ? (
            <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover">
              {item.title}
            </Link>
          ) : (
            item.title
          )}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            {item.venue}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.date}
          </Typography>
        </Box>
      </Box>

      {item.description && (
        <Typography variant="body1" paragraph>
          {item.description}
        </Typography>
      )}

      {!last && <Divider sx={{ width: '100%', my: 2 }} />}
    </ListItem>
  );
};

export default TalksItem; 
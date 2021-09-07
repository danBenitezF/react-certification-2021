import React from 'react';
import {
  Card, CardActionArea, CardContent,CardMedia, Typography, Tooltip
} from '@material-ui/core';
import {useStyles} from './VideoMiniature.style';

export const VideoMiniature = ( { video } ) => {
  const {root, media} = useStyles();
  const {snippet} = video;
  return (
    <Card className={root}>
      <CardActionArea>
        <CardMedia
          className={media}
          image="https://c.tenor.com/gu_WB1ls-7oAAAAd/spiderman-we.gif"
          title={snippet.title}
        />
        <CardContent>
          <Tooltip title={ snippet.title }>
            <Typography noWrap gutterBottom component="h4">
              { snippet.title }
            </Typography>
          </Tooltip>
          <Typography variant="body2" color="textSecondary" component="p">
            { snippet.channelTitle }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';
import {
  Card, CardActionArea, CardContent,CardMedia, Typography, Tooltip
} from '@material-ui/core';
import {useStyles} from './VideoMiniature.style';
import { Link } from 'react-router-dom';

export const VideoMiniature = ( { video } ) => {
  const {root, media} = useStyles();
  const { title, channelTitle, thumbnail, id } = video;
  return (
    <Link to={`/watch/${id}`}>
      <Card className={root}>
        <CardActionArea>
          <CardMedia
            className={media}
            image={thumbnail.url}
            title={title}
            alt={title}
          />
          <CardContent>
            <Tooltip title={ title }>
              <Typography noWrap gutterBottom component="h4">
                { title }
              </Typography>
            </Tooltip>
            <Typography variant="body2" color="textSecondary" component="p">
              { channelTitle }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
